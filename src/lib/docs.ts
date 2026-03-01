import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface DocPage {
  slug: string;
  title: string;
  description?: string;
}

export interface DocTool {
  tool: string;
  category: string;
  versions: string[];
}

export interface DocContent {
  content: string;
  frontmatter: {
    title?: string;
    description?: string;
    [key: string]: unknown;
  };
}

export function getDocContent(
  category: string,
  tool: string,
  version: string,
  slug?: string[],
): DocContent | null {
  try {
    let filePath: string;

    if (!slug || slug.length === 0) {
      filePath = path.join(contentDir, category, tool, version, "index.md");
    } else {
      filePath =
        path.join(contentDir, category, tool, version, ...slug) + ".md";
      if (!fs.existsSync(filePath)) {
        filePath = path.join(
          contentDir,
          category,
          tool,
          version,
          ...slug,
          "index.md",
        );
      }
    }

    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(raw);
    return { content, frontmatter: data };
  } catch {
    return null;
  }
}

export function getDocNavigation(
  category: string,
  tool: string,
  version: string,
): DocPage[] {
  const dir = path.join(contentDir, category, tool, version);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const pages: DocPage[] = [];

  // Always put index first
  const sorted = ["index.md", ...files.filter((f) => f !== "index.md").sort()];

  for (const file of sorted) {
    if (!files.includes(file)) continue;
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    const slug = file.replace(".md", "");
    pages.push({
      slug: slug === "index" ? "" : slug,
      title:
        data.title ||
        slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      description: data.description,
    });
  }

  return pages;
}

export function getAllTools(): {
  category: string;
  tool: string;
  versions: string[];
}[] {
  if (!fs.existsSync(contentDir)) return [];
  const tools: { category: string; tool: string; versions: string[] }[] = [];

  const categories = fs
    .readdirSync(contentDir)
    .filter((f) => fs.statSync(path.join(contentDir, f)).isDirectory());

  for (const category of categories) {
    const categoryDir = path.join(contentDir, category);
    const toolDirs = fs
      .readdirSync(categoryDir)
      .filter((f) => fs.statSync(path.join(categoryDir, f)).isDirectory());
    for (const tool of toolDirs) {
      const toolDir = path.join(categoryDir, tool);
      const versions = fs
        .readdirSync(toolDir)
        .filter((f) => fs.statSync(path.join(toolDir, f)).isDirectory());
      tools.push({ category, tool, versions });
    }
  }

  return tools;
}
