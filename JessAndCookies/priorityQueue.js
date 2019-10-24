var PriorityQueue = require('../DataStructures/PriorityQueue');

module.exports = class PriorityQueueApproach {
  
  constructor() {
    this.pq = new PriorityQueue();
  }

  DoExecute(k, A) {
    return this.cookies(k, A);
  }

  cookies(k, A) {
    for(let i=0, l = A.length; i < l; i++) this.pq.insertKey(A[i]);
    var n = 0, c, c2;
    do {
      c = this.pq.extractMin();
      if(c >= k) return n;
      this.pq.heap_size > 0 && this.pq.insertKey(c + this.pq.extractMin()*2);
      n++;
    }while(this.pq.heap_size > 0);
    return -1;
  }
}