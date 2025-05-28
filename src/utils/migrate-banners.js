import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

/**
 * One time solution to migrate banner images from the pages directory
 * to the public assets directory and update the Markdown files accordingly.
 * This script assumes the following structure:
 * - src
 *   - pages
 *     - blog
 *       - [post-slug]
 *         - banner.jpg
 *         - post.md
 * - public
 *   - assets
 *     - blog
 */

const pagesDir = path.resolve("../src/pages/blog");
const assetsDir = path.resolve("../public/assets/blog");

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      await processDirectory(path.join(dir, entry.name));
    } else if (entry.name === "banner.jpg") {
      const currentDir = dir;
      const relPathFromPages = path.relative(pagesDir, currentDir);
      const newDir = path.join(assetsDir, relPathFromPages);

      await fs.mkdir(newDir, { recursive: true });

      const oldPath = path.join(currentDir, "banner.jpg");
      const newPath = path.join(newDir, "banner.jpg");

      console.log(`Moving ${oldPath} → ${newPath}`);
      await fs.rename(oldPath, newPath);

      // Look for Markdown file in current directory
      const mdFiles = (await fs.readdir(currentDir)).filter((f) =>
        f.endsWith(".md"),
      );

      for (const mdFile of mdFiles) {
        const mdPath = path.join(currentDir, mdFile);
        const mdContent = await fs.readFile(mdPath, "utf-8");
        const parsed = matter(mdContent);

        if (parsed.data.banner === "banner.jpg") {
          const newBannerPath =
            `/assets/blog/${relPathFromPages}/banner.jpg`.replace(/\\/g, "/");
          parsed.data.banner = newBannerPath;

          const updated = matter.stringify(parsed.content, parsed.data);
          await fs.writeFile(mdPath, updated);
          console.log(
            `✔ Updated banner path in ${mdPath} to ${newBannerPath}`,
          );
        }
      }
    }
  }
}

processDirectory(pagesDir)
  .then(() => console.log("✅ Migration complete."))
  .catch((err) => console.error("❌ Error:", err));
