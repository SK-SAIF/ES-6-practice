//In ES-6 we can declare and operate a function in a single line..
//the format is :
// const function-name = (parameter1,parameter2,....) => statement which is to returned by the function;


//function with one parameter
const doubleIt = (num) => num*2;
const result=doubleIt(10);
console.log(result);
//function with more than one parameter
const addnum = (x,y) => x+y;
console.log(addnum(10000,45));
//function with no parameter
const give5 = () =>5;
console.log(give5());
//If there is a big function.then we will follow this:

const bigFan = (x,y)=>{
    const addition=x+y;
    const subtraction=x-y;
    const result=addition*subtraction;
    return result; 
}

console.log(bigFan(7,5));
