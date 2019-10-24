module.exports = class PriorityQueue {
  constructor(capacity) {
    this.harr = [];
    this.heap_size = 0;
  }

  /**
   * Utilitie to swap values in the heap array
   * @param {number} i Index of a value
   * @param {number} j Index of b value
   */
  swap(i, j) {
    let tmp = this.harr[i];
    this.harr[i] = this.harr[j];
    this.harr[j] = tmp;
  }

  /**
   * Parent node index
   * @param {number} i Current element index
   */
  parent(i) {
    return parseInt((i-1)/2);
  }

  /**
   * Left node index
   * @param {number} i Current element index
   */
  left(i) {
    return i*2 + 1;
  }
  /**
   * Right node index
   * @param {number} i Current element index
   */
  right(i) {
    return i*2 + 2;
  }

  getMin() { return this.harr[0]; }

  /**
   * It deletes key at index i
   * @param {number} i Index of the element to be deleted
   */
  deleteKey(i) {
    this.decreaseKey(i, Number.MIN_VALUE);
    this.extractMin();
  }

  /**
   * This peek de min element of heap tree
   */
  extractMin() {
    if(this.heap_size <= 0) return Number.MAX_VALUE;
    if(this.heap_size == 1) return this.harr[--this.heap_size];
    let root = this.harr[0];
    this.harr[0] = this.harr[--this.heap_size];
    this.MinHeapify(0);
    return root;
  }

  /**
   * Decreases value of the key at index i no new value
   * @param {number} i Element's index
   * @param {number} new_val New value
   */
  decreaseKey(i, new_val) {
    this.harr[i] = new_val;
    let p;
    while(i != 0 && this.harr[p = this.parent(i)] > this.harr[i]) {
      this.swap(i, p);
      i = p;
    }
  }

  insertKey(k) {
    let i = this.heap_size++;
    this.harr[i] = k;
    let p;
    while(i != 0 && this.harr[p = this.parent(i)] > this.harr[i]) {
      this.swap(i, p);
      i = p;
    }
  }

  /**
   * Recursive heapify algorithm to move the index element in the properly node
   * @param {number} i Element index
   */
  MinHeapify(i) {
    let l = this.left(i);
    let r = this.right(i);
    let smallest = i;
    if(l < this.heap_size && this.harr[l] < this.harr[i]) smallest = l;
    if(r < this.heap_size && this.harr[r] < this.harr[smallest]) smallest = r;
    if(smallest != i) {
      this.swap(i, smallest);
      this.MinHeapify(smallest);
    }
  }
}