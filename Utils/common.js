'use strict';
const fs = require('fs');
const readline = require('readline');

module.exports = class Utils {
  /**
   * It loads all the modules/approaches in folder problem
   * @param {string} path Folder Path of code approaches
   */
  static loadApproaches(path) {
    return fs.readdirSync(path).filter(function (file) {
      return (/\.(js)$/i).test(file);
    }).map((file) => require(`${path}/${file}`));
  }

  /**
   * It loads all the test cases, located in inpu.txt
   * @param {string} path Folder Path of code challenge
   * @returns {Array} testCases All test cases in array, first element expected result, second one arguments to be passed
   */
  static async loadTestCases(path) {
    let testCases = [];
    const rl = readline.createInterface({
      input: fs.createReadStream(`${path}/input.txt`),
      //output: process.stdout,
      //console: false,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    var i =0;
    for await (const line of rl) {
      i++;
      // Each line in input.txt will be successively available here as `line`.
      let tmp = line.split(/ (.+)/);
      let expected = tmp[0];
      let input = JSON.parse(tmp[1]);
      testCases.push({
        expected: expected,
        input: input
      });
    }
    return testCases;
  }

};