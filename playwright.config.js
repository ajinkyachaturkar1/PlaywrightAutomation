// @ts-check
import { defineConfig, devices } from '@playwright/test';
 
  
/**
 * @see Configuration | Playwright
 */
const config = ({
  testDir: './tests',


  
  timeout : 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  reporter:[
     ['html'],
  ['allure-playwright'],
],

     
  use: {
    browserName: 'chromium',
    headless: false,
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    screenshot : 'on',
    trace : 'on', //retain-on-failure
    video: 'retain-on-failure',
 
 
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
   
  },
 
});
module.exports = config;