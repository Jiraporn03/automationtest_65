import { test, expect } from '@playwright/test';

test('test00022', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงามมมม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke007x');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('a123123123');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).fill('a123123123');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).click();
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0987654321');
  await page.getByRole('textbox', { name: 'อีเมล' }).click();
  await page.getByRole('textbox', { name: 'อีเมล' }).fill('abcde@gmail.com');
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await expect(page.getByRole('heading', { name: ' วิธีการใช้งาน' })).toBeVisible();
  await page.screenshot({path:"test-results/screenshot1.png",fullPage:true});
});


test('test00023', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot2.png",fullPage:true});
});


test('test00024', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot3.png",fullPage:true});
});


test('test00025', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot4.png",fullPage:true});
});


test('test00026', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke00777');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot5.png",fullPage:true});
});


test('test00027', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke000777');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('a123456');
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot6.png",fullPage:true});
});


test('test00028', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke000777');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('a123456');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).fill('a123456');
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot7.png",fullPage:true});
});


test('test00029', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/');
  await page.getByRole('link', { name: 'สมัครสมาชิก' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อ', exact: true }).fill('ศักดิ์ชัย');
  await page.getByRole('textbox', { name: 'นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'นามสกุล' }).fill('โอษฐงาม');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('duke000777');
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน', exact: true }).fill('a123456');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน' }).fill('a123456');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).click();
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0987654321');
  await page.getByRole('button', { name: ' สมัครสมาชิก' }).click();
  await page.screenshot({path:"test-results/screenshot8.png",fullPage:true});
});