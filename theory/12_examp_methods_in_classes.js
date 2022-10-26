/*exam for explain*/

class LinkedList {
  contructor(value) {
    this.value = value;
    console.log(value + " from constructor");
  }
  push(value) {
    this.value = value;
  }
  unshift(value) {
    this.value = value;
  }
  insert(index, value) {
    this.value = value;
  }
  remove(value) {
    this.value = value;
  }
  pop(value) {
    this.value = value;
  }
  shift(value) {
    this.value = value;
  }
}

let myLinkedList = new LinkedList(23);
console.log(myLinkedList);

myLinkedList.push(7);
myLinkedList.unshift(3);
myLinkedList.insert(1, 11);
myLinkedList.remove(1);
myLinkedList.pop(2);
myLinkedList.shift(5);
//console.log(myLinkedList);
