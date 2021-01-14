namespace tsu026 {
let n1: number = 1;
let n2: Number = 1;
console.log(typeof n1);
console.log(typeof n2);
numberFunct(n1, n2);
numberFunct(n1, n1);
// numberFunct(n2, n2); // NO

let n3: Number = Number(2);
let n4: number = Number(3);
let n5: Number = new Number(4);
console.log(typeof n3);
console.log(typeof n4);
console.log(typeof n5);
// let n6: number = new Number(4); // NO

function numberFunct(p1: number, p2: Number) {}
}
