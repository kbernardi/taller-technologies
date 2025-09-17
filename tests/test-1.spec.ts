import { test, expect } from "@playwright/test";
import { exec } from "child_process";

test.describe("Talle first test",()=> {

    test("fills a form on a public website,", async ({ page }) => {
        await page.goto("https://demoqa.com/text-box")
        await page.locator("#userName").fill("John Doe")
        await page.locator("#userEmail").fill("john.doe@example.com")
        await page.locator("#currentAddress").fill("123 Main St")
        await page.locator("#permanentAddress").fill("456 Secondary St")
        await page.locator("#submit").click()
        await expect(page.locator("#output").locator("#name")).toContainText("Name:John Doe")
        await expect(page.locator("#output").locator("#email")).toContainText("Email:john.doe@example.com")
        await expect(page.locator("#output").locator("#currentAddress")).toContainText("Current Address :123 Main St")
        await expect(page.locator("#output").locator("#permanentAddress")).toContainText("Permananet Address :456 Secondary St")
    });

    test("Send request to ,", async ({ request }) => {
        const response = await request.get("https://jsonplaceholder.typicode.com/posts/1")
        const responsJson = await response.json()
        expect(responsJson.hasOwnProperty('userId')).toBeTruthy()
        expect(responsJson.hasOwnProperty('id')).toBeTruthy()
        expect(responsJson.hasOwnProperty('title')).toBeTruthy()
        expect(responsJson.hasOwnProperty('body')).toBeTruthy()
        expect(response.ok)
    });
});
