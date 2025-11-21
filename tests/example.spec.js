import {test, expect} from '@playwright/test';
import ObjectManager  from '../pages/ObjectManager';

let ob;
test.describe('test login', ()=>{
  test.beforeEach(async({page})=>{
     ob = new ObjectManager(page);
  })
  test.afterEach(async({page})=>{
    await page.waitForTimeout(5000);
  })
  
  test('User can successfully login with valid credential', async({page})=>{
     await ob.loginpage.navigate();
     //await ob.loginpage.assertLoginHeadingVisible();
     //await ob.loginpage.assertLoginHeadingVisible();
     await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
     await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();
     await expect(page.getByText('Username', { exact: true })).toBeVisible();
     await expect(page.getByText('Password', { exact: true })).toBeVisible();
     await ob.loginpage.login('tomsmith', 'SuperSecretPassword!');
     
  })
  test('User cannot login with invalid credential', async({page})=>{
    await ob.loginpage.navigate();
    await ob.loginpage.login('invalidUser', 'invalidPassword');
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
    
  })

  
})