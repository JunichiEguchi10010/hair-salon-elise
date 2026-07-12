import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });

const result = await page.evaluate(() => {
  const rectOf = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      x: r.x,
      y: r.y,
      width: r.width,
      height: r.height,
      top: r.top,
      right: r.right,
      bottom: r.bottom,
      left: r.left,
      topRight: { x: r.right, y: r.top },
    };
  };

  const shape = document.querySelector(".concept-image-shape");
  const wrapper = document.querySelector(".concept-image-shape > div");
  const image = wrapper?.querySelector("img");

  return {
    clipPathElement: rectOf(shape),
    image: rectOf(image),
    wrapper: rectOf(wrapper),
  };
});

console.log(JSON.stringify(result, null, 2));
await browser.close();
