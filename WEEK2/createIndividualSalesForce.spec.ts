import { test, expect } from "@playwright/test";

test('Create Individuals in SalesForce', async ({ page }) => {

    await page.goto("https://login.salesforce.com")
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[class="input r4 wide mb16 mt8 password"]').fill('TestLeaf@2025')
    await page.waitForSelector('input[type="submit"]');
    await page.locator('input[type="submit"]').click()
    await page.waitForTimeout(10000)
    await page.waitForSelector('.slds-r4');
    await page.locator('.slds-r4').click()
    await page.waitForTimeout(5000)
    await page.locator('button[aria-label="View All Applications"]').click()
    await page.waitForTimeout(5000)
    await page.locator('//input[contains(@placeholder, "Search apps or items")]').fill('Individuals')
    await page.locator('//mark[text()="Individuals"]').click();
    await page.waitForTimeout(10000)
    await page.locator('//div[@title="New"]').click();
    await page.waitForTimeout(5000)
    await page.locator('//*[@placeholder="Last Name"]').fill('Mari1')
    await page.locator('//span[text()="Save"]').click();

    await expect(page).toHaveTitle(/Mari/);
    //await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/r/Lead/");
    await page.waitForTimeout(5000)

    await expect(page.locator('.uiOutputText').nth(0)).toContainText('Mari1');




})