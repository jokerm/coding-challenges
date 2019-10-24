const Runner = require('./Utils/runner');

async function DoRun(TestsName) {
  for(let i=0; i<TestsName.length; i++) {
    let res = await new Runner(require('path').join(__dirname, TestsName[i])).ExecuteApproaches();
    console.log("\x1b[32m", res);
    console.log("\x1b[0m");
  }
  return 'Done =)'
}

/** 
 * Jesse and Cookies
 * {@link https://www.hackerrank.com/challenges/jesse-and-cookies/problem}
 */
DoRun(['JessAndCookies']).then(console.log);