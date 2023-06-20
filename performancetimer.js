//Using performance

function addUpTo(n){
    let total = 0;
    for(let i=0;i<=n;i++){
        total+=i
    }
    return total
}
const t1 = window.performance.now()
addUpTo(1000000000);
const t2 = window.performance.now();
console.log((t2-t1)/1000,"in Seconds")
//
console.log('-------------Using Math Logic');

function addUsingMath(n){
const result = n*(n+1)/2;
return result;
}
const ti1 = window.performance.now();
addUsingMath(1000000000);
const ti2 = window.performance.now();
console.log((ti2-ti1)/1000,"in Seconds")
