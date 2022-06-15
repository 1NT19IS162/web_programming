//array method

//adding to array
const arr1=[2,4,5,6,10];
arr1.splice(4,0,7,8);
 console.log(arr1);

//deleting elements
const arr2=["jan","feb","march","may"];
    arr2.splice(1,1);
console.log(arr2);

//push method
const arr7=["monday","wednesday","thursday"];
 arr7.push("tuesday");
 console.log(arr7);

 //pop method
 const arr8=["seth","johnson","jen","mark"];
 arr8.pop();
 console.log(arr8);

 //unshift add elements in the beginning
 arr8.unshift("rain");
 console.log(arr8);

 //shift remove elements from beginning
 arr8.shift();
 console.log(arr8);