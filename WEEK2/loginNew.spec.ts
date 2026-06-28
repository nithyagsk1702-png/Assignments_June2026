import {chromium, webkit, test, expect} from "@playwright/test";
test('REDBUS login',async () => {


    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.redbus.in")

    let title = await page.title()
    console.log(title);    

    let pageURL = page.url()
    console.log(pageURL);  

    //await expect(page).toHaveTitle(/Bus Booking Online/);
    //await expect(page).toHaveURL("https://www.redbus.in/");

    const browser1 = await webkit.launch({headless:false})    
    const context1= await browser1.newContext();
    const page1 =await context1.newPage();
    await page1.goto("https://www.flipkart.com")

    let title1 = await page1.title()
    console.log(title1);    

    let pageURL1 = page1.url()
    console.log(pageURL1);  

    //await expect(page1).toHaveTitle(/Online Shopping Site/);
    //await expect(page1).toHaveURL("https://www.flipkart.com/");
})

 
