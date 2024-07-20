import { test, expect } from "@playwright/test";
import { describe } from "node:test";

describe("Verification of Footer Download Links", async ({}) => {
  test("App Store Link", async ({ page }) => {
    await page.goto("https://blog.hubtel.com/");
    await page.locator(".col-5 > div > .d-flex > li > a").first().click();
    await page.waitForTimeout(3000);
    await expect(page.getByRole("link", { name: "App Store" })).toBeVisible();
  });

  test("App Gallery Link", async ({ page }) => {
    await page.goto("https://blog.hubtel.com/");
    await page.locator(".d-none > .d-flex > li:nth-child(2) > a").click();
    await page.waitForTimeout(3000);
    await expect(page.getByText("AppGallery", { exact: true })).toBeVisible();
  });
});
