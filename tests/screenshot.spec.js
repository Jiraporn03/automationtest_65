import { test, expect } from '@playwright/test';

test('screenshot', async ({ page }) => {
    //ชื่อเรื่องการทดสอบproject_register
    await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    //คำสั่งในการถ่ายภาพหน้าจอ
    await page.screenshot({ path: 'screenshot.png' });

    await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();

    await page.screenshot({ path: 'test-results/screenshot1.png', fullPage:true});
});

test('kmutnb', async ({ page }) => {
    //ชื่อเรื่องการทดสอบproject_register
    await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    await page.screenshot({ path: 'test-results/screenshot1.png'});

    await page.screenshot({ path: 'test-results/screenshot1.png', fullPage:true});

    await page.locator('nav').screenshot({ path: 'test-results/screenshot2.png'});
    await page.locator('footer').screenshot({ path: 'test-results/screenshot3.png'});
    //ถ้าต้องการระบุตำแหน่ง class ใช้ . id ใข้ #
    await page.locator('.vehicle_section').screenshot({ path: 'test-results/screenshot4.png'});
});

test('example', async ({ page }) => {
    //ชื่อเรื่องการทดสอบproject_register
    await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    

});

test('test', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('aoh');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('aoh1234');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'กลุ่มวิชาเรียนทั้งหมด' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' })).toBeVisible();
});