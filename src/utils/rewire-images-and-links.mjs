/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * UGLY hack until Astro can deal with blog directories
 * See to add this to the build pipeline.
 */
export default function rewireImagesAndLinks() {
  const el = document.getElementById("blog-post-content")

  let blogDir = location.pathname
  if (blogDir.endsWith("/")) {
    blogDir = blogDir.slice(0, -1)
  }
  const pos = blogDir.lastIndexOf("/")
  blogDir = blogDir.substring(pos + 1)

  for (const i of el.getElementsByTagName("img")) {
    if (i.src.indexOf(location.hostname) > -1 && i.src.indexOf("/blog/" > -1)) {
      i.src = `/blog-assets/${blogDir}/${i.src.substring(Math.max(0, i.src.lastIndexOf("/") + 1))}`
    }
  }

  for (const a of el.getElementsByTagName("a")) {
    if (a.hostname == location.hostname && a.href.indexOf("/blog/") > -1) {
      a.href = `/blog-assets/${blogDir}/${a.href.substring(Math.max(0, a.href.lastIndexOf("/") + 1))}`
    }
  }
}
