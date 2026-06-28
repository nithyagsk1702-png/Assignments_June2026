import {test, expect} from "@playwright/test";


test('SalesForce login',async ({page}) => {

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[class="input r4 wide mb16 mt8 password"]').fill('TestLeaf@2025')
    await page.locator('input[type="submit"]').click

    let title = await page.title()
    console.log(title);    

    let pageURL = page.url()
    console.log(pageURL);  

    await expect(page).toHaveTitle(/Salesforce/);
    await expect(page).toHaveURL("https://login.salesforce.com/?locale=in");
    
})
