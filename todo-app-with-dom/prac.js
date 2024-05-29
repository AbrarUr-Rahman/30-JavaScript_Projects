var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];

var arr3 = [{ value: "" }, { value: "" }, { value: "" }];

for (let i = 0; i < arr1.length; i++) {
  arr3[i].value = arr1[i] + arr2[i];
}

console.log(arr3);
