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
    await page.locator('//*[@title="Select a List View: Individuals"]').click()
    await page.locator('//*[@aria-label="Search this list..."]').fill('Marimuthu')    
    await page.getByPlaceholder('Search this list...').press('Enter');    
    await page.locator('//div[@title="Edit"]').click();
    await page.waitForTimeout(10000)
    await page.locator('//a[@class="select"]').nth(0).click();
    await page.locator('//a[@title="Prof."]').click();
    await page.locator(`[placeholder="First Name"]`).fill(`Dhashvanth`)   
    await page.locator('//span[text()="Save"]').click();


})
