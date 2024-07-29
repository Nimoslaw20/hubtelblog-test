import { expect, Page } from "@playwright/test";
import { BASE_URL } from "../support/config";

export async function verifyTopLinks(page: Page, title: string) {
  await gotoPage(page);
  await page.getByRole("link", { name: title }).click();

  // Expects page to have a heading with the name of title.
  await expect(page.getByRole("heading", { name: title })).toBeVisible();
}

export async function verifyTopLinksForMultipleElement(
  page: Page,
  title: string
) {
  await gotoPage(page);

  await page.locator("a").getByText(title).first().click();
  await expect(page.getByRole("heading", { name: title })).toBeVisible();
}

export async function verifyTopLinksForMultipleElementSpecificallyForProductUpdates(
  page: Page,
  title: string
) {
  await gotoPage(page);

  // Locate the nav bar container
  await page
    .locator(`nav .navbar-nav .nav-item a.nav-link:has-text("${title}")`)
    .click();

  // Expects page to have a heading with the name of title.
  await expect(page.getByRole("heading", { name: title })).toBeVisible();
}

export async function countSquareArticle(page: Page) {
  const articleBlock = await page.locator("div.row.g-4");
  const articles = await articleBlock
    .locator("div.col-12.col-md-6.col-lg-4.col-xl-3")
    .count();
  console.log("count is ", articles);
  await expect(articles).toBeGreaterThan(0);
}

export async function gotoPage(page: Page) {
  await page.goto(BASE_URL);
}
