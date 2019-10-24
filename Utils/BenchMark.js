const NS_PER_SEC = 1e9;

module.exports = class BenchMark {

  constructor() {
    this.i = 1;
    this.totalTime = 0;
  }

  Execute(instance, args) {
    let time = process.hrtime();
    let res = instance.DoExecute.apply(instance, args);
    const diff = process.hrtime(time);
    let result; 
    this.totalTime += (result = diff[0] * NS_PER_SEC + diff[1]);
    console.info(`Benchmark [${this.i++}][${instance.constructor.name.padEnd(25, ' ')}] = ${res.toString().padStart(10, ' ')} in  ${result.toString().padStart(15)} nanoseconds`);
    return {
      time: result,
      name: instance.constructor.name,
      out: res,
      totalTime: this.totalTime
    };
  }
}