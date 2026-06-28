import {test  } from "@playwright/test";
test('Create Lead login',async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill('demoCSR2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click() 

    await page.locator('.crmsfa').click()  
    await page.waitForTimeout(6000)    
   
    await page.locator('//a[text()="Leads"]').click()
    await page.waitForTimeout(6000)    
   
    await page.locator('//a[text()="Create Lead"]').click()
    await page.locator('#createLeadForm_companyName').fill('Yectra')
    await page.locator('#createLeadForm_firstName').fill('Nithya')
    await page.locator('#createLeadForm_lastName').fill('Marimuthu')   

    await page.locator('input[name="personalTitle"]').fill('Mrs.')
    await page.locator('input[name="generalProfTitle"]').fill('Automation Tester')
    await page.locator('input[name="annualRevenue"]').fill('1000000')
    await page.locator('#createLeadForm_industryEnumId').selectOption('IND_SOFTWARE')    
    await page.locator('input[name="departmentName"]').fill('Testing')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('8056685668')    
    await page.locator('.smallSubmit').click()  
})