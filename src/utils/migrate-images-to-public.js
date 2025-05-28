import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const rootDir = path.resolve(__dirname, "../.."); // goes from src/utils → project root
const pagesDir = path.join(rootDir, "src/pages/blog");
const publicAssetsDir = path.join(rootDir, "public/assets/blog");

const supportedImageExts = [".jpg", ".png", ".svg"];

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(entryPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();

      if (supportedImageExts.includes(ext)) {
        const relativeDir = path.relative(pagesDir, dir);
        const newDir = path.join(publicAssetsDir, relativeDir);
        const newPath = path.join(newDir, entry.name);

        await fs.mkdir(newDir, { recursive: true });

        console.log(`Moving ${entryPath} → ${newPath}`);
        await fs.rename(entryPath, newPath);

        // Look for Markdown files in the same directory
        const markdownFiles = (await fs.readdir(dir)).filter((f) =>
          f.endsWith(".md"),
        );

        for (const mdFile of markdownFiles) {
          const mdPath = path.join(dir, mdFile);
          const mdContent = await fs.readFile(mdPath, "utf-8");
          const parsed = matter(mdContent);

          let updated = false;
          const newImagePath =
            `/assets/blog/${path.join(relativeDir, entry.name)}`.replace(
              /\\/g,
              "/",
            );

          for (const key in parsed.data) {
            if (
              typeof parsed.data[key] === "string" &&
              parsed.data[key] === entry.name
            ) {
              parsed.data[key] = newImagePath;
              updated = true;
            }
          }

          if (updated) {
            const updatedContent = matter.stringify(
              parsed.content,
              parsed.data,
            );
            await fs.writeFile(mdPath, updatedContent);
            console.log(`✔ Updated image reference in ${mdPath}`);
          }
        }
      }
    }
  }
}

processDirectory(pagesDir)
  .then(() => console.log("✅ All images migrated and frontmatter updated."))
  .catch((err) => console.error("❌ Error during migration:", err));
