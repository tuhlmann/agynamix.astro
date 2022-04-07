/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * UGLY hack until Astro can deal with blog directories
 * See to add this to the build pipeline.
 */
export default function rewireImagesAndLinks() {
  const el = document.getElementById("blog-post-content")
  const l = location.pathname.replace("/blog/", "/blog-assets/") + "/"

  for (const i of el.getElementsByTagName("img")) {
    if (i.src.indexOf(location.hostname) > -1 && i.src.indexOf("/blog/" > -1)) {
      i.src = i.src.replace("/blog/", l)
    }
  }

  for (const a of el.getElementsByTagName("a")) {
    if (a.hostname == location.hostname && a.href.indexOf("/blog/") > -1) {
      a.href = a.href.replace("/blog/", l)
    }
  }
}
