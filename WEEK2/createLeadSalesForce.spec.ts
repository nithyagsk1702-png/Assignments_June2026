import { test, expect } from "@playwright/test";

test('Create Lead in SalesForce', async ({ page }) => {

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
    //await page.locator('input[@placeholder="Search apps or items..."]').fill('Leads')
    await page.locator('//input[contains(@placeholder, "Search apps or items")]').fill('Leads')
    await page.locator('//mark[text()="Leads"]').click();
    await page.waitForTimeout(10000)
    await page.locator('//div[@title="New"]').click();
    await page.locator('//button[@aria-label="Salutation"]').click()
    await page.locator('//span[text()="Mr."]').click();
    await page.locator('//input[@name="lastName"]').fill('Marimuthu')
    await page.locator('//input[@name="Company"]').fill('Yectra')
    await page.locator('//button[@name="SaveEdit"]').click();
    await expect(page).toHaveTitle(/Marimuthu/);
    //await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/r/Lead/");
    await page.waitForTimeout(5000)
    await expect(page.locator('lightning-formatted-name')).toContainText(/Marimuthu/)
    await expect(page.locator('//records-entity-label[text()="Lead"]')).toBeVisible()




})
