module.exports = class HeapJsApproach {

  constructor() {

  }

  DoExecute(k,A) {
    return this.cookies(k, A);
  }

  cookies(k, A) {
    /*
     * Write your code here.
     */
    var list = {};
    for (let i = 0; i < A.length; i++) {
      this.add(list, A[i]);
    }
    var n = 0, c1, c2;
    do {
      c1 = this.peek(list);
      if (c1 >= k) {
        return n;
      }
      c2 = this.peek(list);
      c2 >= 0 && this.add(list, c1 + 2 * c2);
      ++n;
    } while (c1 >= 0);
    return -1;
  }

  peek(heap) {
    for (var k in heap) {
      if(--heap[k] == 0) delete heap[k];
      return +k;
    }
    return -1;
  }

  add(heap, value) {
    if (value < 0) return value;
    heap[value] = heap[value] == undefined ? 1 : heap[value] + 1;
    return value;
  }
}