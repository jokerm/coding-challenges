"use strict";

const Utils = require('./common');
const BenchMark = require('./BenchMark');

module.exports = class ApproachesRunner {
  constructor(basePath) {
    this.basePath = basePath;
  }

  async ExecuteApproaches() {
    var toTest = Utils.loadApproaches(this.basePath);
    var fastest = {};
    for (let i = 0; i < toTest.length; i++) {
      let res = await this.ExecuteApproach(new BenchMark(), i, toTest);
      fastest[res.time] = res.name;
    }
    for (var k in fastest) {
      return !!fastest[k] ? `Fastest is ${fastest[k]} in = ${k}` : '';
    }
  }
  
  async ExecuteApproach(bnm, index, approaches) {
    var inputData = await Utils.loadTestCases(this.basePath);
    let res;
    console.log("".padStart(15, '=') + ` Approach ${index + 1} ` + "".padEnd(15, '='));
    for (let i = 0; i < inputData.length; i++) {
      res = bnm.Execute(new approaches[index](), inputData[i].input);
      if (res.out != inputData[i].expected) {
        console.log("\x1b[31m", `Test case [${i}] failed, expected = ${inputData[i].expected}, returned ${res.out}`);
        console.log("\x1b[0m");
        return -1;
      }
    }
    console.log("".padStart(57, " ") + "".padStart(16, "-"));
    console.log("".padStart(57, " ") + `${bnm.totalTime}`.padStart(16, " "));
    return {
      time: bnm.totalTime,
      name: res.name
    };
  }

}