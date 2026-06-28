import test from "@playwright/test";
test('Select options from dropdown',async({page})=>{
await page.goto("https://www.leafground.com/select.xhtml")
await page.locator('//select[@class="ui-selectonemenu"]').selectOption('Playwright')

const dropdownMenu=  page.locator('//select[@class="ui-selectonemenu"]/option')
const countOfDropdown=await dropdownMenu.count()
console.log(`the no of dropdowns in the page ${countOfDropdown}`)

for(let index=0;index<countOfDropdown;index++){
   console.log(await dropdownMenu.nth(index).innerText()) 
}


})