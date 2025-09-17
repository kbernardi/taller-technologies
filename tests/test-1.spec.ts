import { test, expect } from "@playwright/test";

test.describe("Test something",{
    tag:'@test1', 
    annotation:{
        type:'issue',
        description: 'test'}
    
  },()=> {
    test("test", async ({ page }) => {
        await page.goto('https://google.com.br')
        await page.getByRole("img",{name:'Google'}).click()
        await expect(page.getByRole("img",{name:'Google'})).toBeVisible()
    });
});
