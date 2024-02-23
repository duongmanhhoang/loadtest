// const puppeteerLoadTest = require("puppeteer-loadtest");

// const options = {
//   file: '',
//   url: "https://dev-front.dev-portal.cyberstar.jp/portal", // URL của trang web bạn muốn kiểm tra
//   maxUsers: 10, // Số lượng người dùng
//   iterations: 1, // Số lần lặp lại
//   headless: false, // Chạy Puppeteer ở chế độ headless
//   timeout: 60000, // Thời gian chờ tối đa cho mỗi request (milliseconds)
//   puppeteerOptions: {
//     // Các tùy chọn Puppeteer khác nếu cần
//   },
//   metrics: ["navigation", "memory"], // Các metrics bạn muốn thu thập
// };

// puppeteerLoadTest(options)
//   .then((results) => {
//     console.log(results, 123);
//   })
//   .catch((error) => {
//     console.error(error, 23);
//   });

const startPuppeteerLoadTest = require('puppeteer-loadtest');

startPuppeteerLoadTest({
    file: 'loadtest.js',
    samplesRequested: 1,
    concurrencyRequested: 500
});
