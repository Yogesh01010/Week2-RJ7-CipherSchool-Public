// const myName = [];
// console.log(myName) ;
// myName.push("Ritikesh");
// console.log(myName);


// let myName="Rititkesh";
// console. log(myName) ;
// myName="Yogesh";
// console.log(myName);

// var myName="Ritikesh";
// console.log(myName);
// myName=5;
// console.log(myName);

// var myName="Shashank";
// console.log(myName);

// {
// var num=5;
// }

// console.log(num);

//String interpolation
// let firstName="Yogesh";
// let lastName="Yogi";

// //let fullName=firstName+" "+lastName;
// let fullName=`${firstName} ${lastName}`;
// console.log(fullName);

//Default Params

// let addTwoNumbers=(num1,num2)=> num1+num2;

// console.log(addTwoNumbers(1,2));

// let addTwoNumbers=(num1,num2)=> {
// console.log(num1);
// console.log(num2);
//     return  num1+num2;
// }
// console.log(addTwoNumbers(1));

//Rest and spread operator
let array=[5,10,15,20,25];

//spread -> ...

// let newArray =[...array];
// console.log(array);
//rest -> ...
let newArray =[...array,30,35,40];
console.log(newArray);