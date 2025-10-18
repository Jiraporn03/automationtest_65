import { test, expect } from '@playwright/test';

test('facebook', async ({ page }) => {
    //ชื่อเรื่องการทดสอบfacebook
    await page.goto('https://www.facebook.com//');
    //Locator การระบุตำแหน่ง
    //await page.getByRole('button', { name: 'Log in' }).click();
    //await page.getByRole('button', { name: 'Create new account' }).click();
    await page.getByRole('textbox', { name: 'Email address or phone number' }).fill("0957160117");
    await page.getByRole('textbox', { name: 'Password' }).fill("auiji2546");
});

test('facebook_register', async ({ page }) => {
    //ชื่อเรื่องการทดสอบfacebook
    await page.goto('https://www.facebook.com/');
    await page.getByRole('Button', { name: 'Create new account' }).click();
    await page.getByRole('textbox', { name: 'First name' }).fill("jiraporn");
    await page.getByRole('textbox', { name: 'Surname' }).fill("chaiprakon");
    await page.getByRole('combobox', { name: 'Day' }).selectOption("14");
    await page.getByRole('combobox', { name: 'Month' }).selectOption("Sep");
    await page.getByRole('combobox', { name: 'Year' }).selectOption("2003");
    await page.getByRole('radio', {name: 'Female',expect:true}).check();
    await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill("0957160117");
    await page.getByRole('textbox', { name: 'New password' }).fill("123456");
    
});