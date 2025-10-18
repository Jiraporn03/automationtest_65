import { test, expect } from '@playwright/test';

test('register', async ({ page }) => {
    //ชื่อเรื่องการทดสอบproject_register
    await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
    await page.getByRole('textbox', { name: 'ชื่อ',exact:true}).fill("jiraporn");
    await page.getByRole('textbox', { name: 'นามสกุล'}).fill("chaiprakon");
    await page.getByRole('textbox', { name: 'ชื่อผู้ใช้',exact:true}).fill("jiraporn");
    await page.getByRole('textbox', { name: 'รหัสผ่าน' ,exact:true}).fill("123456");
    await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' ,exact:true}).fill("123456");
    await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์'}).fill("0957160117");
    await page.getByRole('textbox', { name: 'อีเมล'}).fill("jiraporn.ck@rmuti.ac.th");
    await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
});

test('fornend_logion', async ({ page }) => {
    //ชื่อเรื่องการทดสอบproject
    await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
    await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('textbox', { name: 'ชื่อผู้ใช้'}).fill("jiraporn");
    await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill("123456");
    await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
    //การเช็คข้อความ
    await expect.soft(page.getByText('กลุ่มวิชาเรียนทั้งหมด')).toBeVisible();
});


test('test', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('jiraporn');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'กลุ่มวิชาเรียนทั้งหมด' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' })).toBeVisible();
});

