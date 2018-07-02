/**
* @description 线性队列
*/

function Queue (items) {
  this.first = null;
  this.last = null;
  this.length = 0;
  if (items) {
    for (var item of items) {
      this.enqueue(item);
    }
  }
}

Queue.prototype = {
  constructor: Queue,
  // 加入队列
  enqueue: function (item) {
    var first = this.first;
    var node = {
      item: item,
      next: null
    };
    if (first === null) {
      this.first = node;
    } else {
      first.next = node;
    }
    this.first = node;
    this.length++;
  },
  // 出队列
  dequeue: function () {
    var last = this.last;
    if (last === null) {
      return undefined;
    }
    var next = last.next;
    if (next === null) {
      this.first = null
    }
    this.last = next;
    this.length--;
    return last.item;
  }
};