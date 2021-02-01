const arr1=[12,34,23,56];
const arr2=[24,46,11];

//merging two arrays;

const all=arr1.concat(arr2);
console.log(all);

const arr3=[3,46,13,7];
//merging more than two arrays.
const all2=arr1.concat(arr2).concat([5]).concat(arr3);
console.log(all2);

//another way is threedots;

const all3=[...arr1,...arr2,...arr3,5];
console.log(all3);

const taka=[1232,3454,3535,7878];
const x=Math.max(...taka);
console.log(x);
