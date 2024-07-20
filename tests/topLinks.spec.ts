import { test, expect, } from '@playwright/test';
import { describe } from 'node:test';
import { verifyTopLinks, verifyTopLinksForMultipleElement, countSquareArticle } from '../support/helpers';



//test suite for top links
describe("Verification of Top Links & One Article Found", async ({  })=>{
  
  test('Official Hubtel Blog page', async ({ page }) => {
    await page.goto('https://blog.hubtel.com/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/The Official Hubtel Blog/);
  });
  

  test('News', async ({ page }) => {
    await verifyTopLinks(page, "News");
    await countSquareArticle(page);
  }); 
  

  test('Press Releases', async ({ page }, testInfo) => {
    await verifyTopLinks(page, testInfo.title);
    const articles = await page.locator(
     'h5'
    ).count();
    console.log("articles is ", articles);
    // Get the count of articles
    await expect(articles).toBeGreaterThan(0);

  }); 

  test('Customer Stories', async ({ page }, testInfo) => {
    await verifyTopLinksForMultipleElement(page, testInfo.title);
    await countSquareArticle(page);
  }); 

  test('Product Updates', async ({ page }, testInfo) => {
    await verifyTopLinks(page, testInfo.title);
    await countSquareArticle(page);
  }); 

  test('Guides', async ({ page }, testInfo) => {
    await verifyTopLinks(page, testInfo.title);
    await countSquareArticle(page);
  }); 

  test('Inside Hubtel', async ({ page }, testInfo) => {
    await verifyTopLinks(page, testInfo.title);
    await countSquareArticle(page);
  }); 

})




