/* eslint-disable no-console */
import puppeteer, { Browser } from "puppeteer";

const baseUrl = "https://www.zetachain.com/docs";
const checkedUrls = new Set<string>();

async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function checkLink(browser: Browser, link: string): Promise<void> {
  if (!link) return;

  const page = await browser.newPage();

  try {
    await delay(300); // Wait for 300ms before checking the link
    const response = await page.goto(link, { waitUntil: "networkidle2" });
    if (response && response.status() >= 400) {
      console.log(`❌ ${link} (status: ${response.status()})`);
    } else {
      console.log(`✅ ${link}`);
    }
  } catch (error) {
    console.log(`⛔️ Error accessing link: ${link}`);
  } finally {
    await page.close();
  }
}

async function checkLinksInBatches(url: string, batchSize: number = 10): Promise<void> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  const links = await page.$$eval("a", (anchors) => anchors.map((anchor) => anchor.href));

  const batches: string[][] = [];
  for (let i = 0; i < links.length; i += batchSize) {
    batches.push(links.slice(i, i + batchSize));
  }

  for (const batch of batches) {
    const checkPromises = batch.map((link) => {
      if (!checkedUrls.has(link)) {
        checkedUrls.add(link);
        return checkLink(browser, link);
      }
      return Promise.resolve();
    });
    await Promise.all(checkPromises);
  }

  await browser.close();
}

checkLinksInBatches(baseUrl, 10).catch(console.error);
