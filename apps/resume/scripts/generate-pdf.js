import { chromium } from "@playwright/test"

const main = async () => {
  // Install browsers if needed
  await installBrowsers()

  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto("http://localhost:4321/", { waitUntil: "networkidle" })

  await page.emulateMedia({ media: "screen" })

  await page.pdf({
    margin: { bottom: "50px", top: "50px" },
    path: "public/resume.pdf",
    printBackground: true,
  })

  return browser.close()
}

main()
