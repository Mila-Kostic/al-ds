let ob1 = {
  value: 10,
};

let ob2 = ob1;
console.log(ob1);
console.log(ob2);

let obj3 = {
  value: 57,
};
ob2 = obj3;
console.log(obj3);
console.log(ob2);
console.log(ob1);

ob1 = ob2;

console.log(obj3);
console.log(ob2);
console.log(ob1);
