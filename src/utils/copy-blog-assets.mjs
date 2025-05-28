import fs from "fs";
import path from "path";

const src = path.join(process.cwd(), "/src/pages/blog");
const dest = path.join(process.cwd(), "/public/blog-assets");

// async function removeBlogAssetsDir() {
//   return fs.promises.rmdir(dest, { recursive: true })
// }

async function createDir(dir) {
  if (!fs.existsSync(dir)) {
    return fs.promises.mkdir(dir);
  }
}

async function copyPostAssets(postPath, assetPath) {
  const assets = await fs.promises.readdir(postPath, { withFileTypes: true });
  for (const asset of assets.filter(
    (p) => !p.isDirectory() && p.name !== "index.md",
  )) {
    const srcFile = path.join(postPath, asset.name);
    const destFile = path.join(assetPath, asset.name);
    if (!fs.existsSync(destFile)) {
      fs.copyFileSync(srcFile, destFile);
    }
  }
}

async function copyBlogAssets() {
  console.log("Copy assets from blog posts into " + dest);
  try {
    // Get the files as an array
    // await removeBlogAssetsDir()
    await createDir(dest);
    const blogPosts = await fs.promises.readdir(src, { withFileTypes: true });
    for (const post of blogPosts.filter((p) => p.isDirectory())) {
      const postPath = path.join(src, post.name);
      const assetPath = path.join(dest, post.name);
      // console.log("process ", postPath)
      await createDir(assetPath);
      await copyPostAssets(postPath, assetPath);
    }
  } catch (err) {
    console.error("Error looping through blog posts", err);
  }
}

copyBlogAssets();
