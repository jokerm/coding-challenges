module.exports = class ArrayInsertionSort {

  DoExecute(k, A) {
    return this.cookies(k, A);
  }

  cookies(k, A) {
    /*
     * Write your code here.
     */
    A.sort((a, b) => a - b);
    //    var sw = A.shift() + 2 * A.shift();
    //    if(sw >= k) return 0;
    //    insert(sw, A);
    var i = 0;
    let l1;
    do {
      l1 = A.shift();
      if (l1 >= k) { return i; }
      A.length > 0 && this.insert(l1 + A.shift() * 2, A);
      i++;

    } while (A.length > 0);
    return -1;
  }

  insert(newCookie, A) {
    if (newCookie == undefined || isNaN(newCookie)) return undefined;
    for (let i = 0, l = A.length; i < l; i++) {
      if (A[i] > newCookie) {
        A.splice(i, 0, newCookie);
        return newCookie;
      }
    }
    A.push(newCookie);
    return newCookie;
  }
}