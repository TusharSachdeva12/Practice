/*
let fib=1;
let numbers=6;
for (let index = 1; index <= numbers; index++) {
    fib=fib*index;
}
console.log(fib)
*/
/*let number =6
        let temp = 1
        for(let i=1;i<=number;i++)
        {
            temp =temp * i
        }
        console.log(temp)
        */
let a=6;
function factorial(number) {
    let arr=Array.from(Array(number+1).keys())
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}
console.log(factorial(a))   