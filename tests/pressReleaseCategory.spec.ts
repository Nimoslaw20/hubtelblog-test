import { test, expect, Page} from "@playwright/test";


test("Verification of images, date, read duration and title", async ({page}) => {


    await page.goto('https://blog.hubtel.com/');
    await page.getByRole('link', { name: 'Press Releases' }).click();

    const articles = page.locator(
      "row py-4 align-items-center"
    );

    // Get the count of articles
    const numberOfArticle = await articles.count();
  
    if (numberOfArticle > 0 ) {


        for (let i = 0; i < numberOfArticle; i++) {
            const article = articles.nth(i);
      
            // Check for image
        
            await expect(article.locator("img")).toBeVisible();
      
            // Check for title - h5
         
            await expect(article.locator("h5")).toBeVisible();
      
            // Check for date
            await expect(article.locator("p.text-muted.mb-4.mb-md-0.fw-normal")).toBeVisible();
      
            // Check for reading duration
            await expect(article.locator("span.ps-4")).toBeVisible();
          }
    } else {

        console.log("No articles yet.")
    }
    // Iterate over each article and check for image, title, date, and reading duration
    
  });