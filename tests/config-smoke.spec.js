const { test, expect } = require("@playwright/test")
const { openLoginPage } = require("../utils/LoginPageHelper")
const { getEmailField } = require("../utils/GetEmailFieldHelper")



test("Config smoke test", async ({ page }) => {
    await page.goto("/login");
    await expect(await page.title()).toMatch(/EventHub/i)
    await expect(page.getByPlaceholder("you@email.com")).toBeVisible()
    await expect(page.getByRole('button', { name: "Sign In" })).toBeVisible()
})

test("Compare page fixture and browser context", async ({ page, browser }) => {
    const BASE_URL = "https://eventhub.rahulshettyacademy.com"
    await openLoginPage(page)
    await getEmailField(page).fill("beginner@sample.com")
    await expect(getEmailField(page)).toHaveValue("beginner@sample.com")
    const isolatedContext = await browser.newContext()
    const isolatedPage = await isolatedContext.newPage()
    await isolatedPage.goto(BASE_URL + "/login")
    await expect(isolatedPage.locator('h1:has-text("Sign in to EventHub")')).toBeVisible()
    await expect(getEmailField(isolatedPage)).toHaveValue("");
    await isolatedPage.close()
})

test.afterEach(async ({ }, result) => {
    const broswerType = await result.project.name;
    console.log("Broswer Name: " + broswerType)
    if (result.status !== result.expectedStatus) {
        console.log("Test case " + result.title + " is failed")
    } else {
        console.log("Test case " + result.title + " is passed")
    }
})


