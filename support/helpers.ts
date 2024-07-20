import { expect, Page } from "@playwright/test";


export async function verifyTopLinks(page: Page, title: string) {
    await page.goto('https://blog.hubtel.com/');
    await page.getByRole('link', { name: title }).click();
  
    // Expects page to have a heading with the name of title.
    await expect(page.getByRole('heading', { name: title })).toBeVisible();
}



export async function verifyTopLinksForMultipleElement(page: Page, title: string) {
    await page.goto('https://blog.hubtel.com/');
    // await page.getByRole('link', { name: title }).click();
    await page.locator("a").getByText(title).first().click();
  
    // Expects page to have a heading with the name of title.
    await expect(page.getByRole('heading', { name: title })).toBeVisible();
}



export async function countSquareArticle(page: Page) {
    const articleBlock = await page.locator('div.row.g-4');
    const articles = await articleBlock.locator('div.col-12.col-md-6.col-lg-4.col-xl-3').count();
    console.log("count is ", articles);
    await expect(articles).toBeGreaterThan(0);
    
}










 