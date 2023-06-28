 /*write a function same which takes 2 arrays as parameters
the function should return true if every value in the array has its corresponding value squared in the
second array. The frequency of values must be the same
 */
 
 function same(a, b) {
  //solution 1
  /* 
  O(n2)
  if(a.length !== b.length){
    return false;
  }
  for(let i=0;i<a.length;i++){
    let correctIndex = b.indexOf(a[i]*a[i]);
    if(correctIndex === -1){
      return false;
    }
    arr2.splice(correctIndex,1)
  }
  return true;
  }
  */

  
 //O(n2)
  var bArray = new Set(b); //O(n)
  const newBarray = Array.from(bArray);//O(n)
  let returnValue = false;
  if (a.length === newBarray.length) { 
    //O(n2)
    a.map((elem) => {//O(n)
      if ((newBarray.indexOf(elem * elem)) === -1) {//O(n)
        returnValue = false;
        return;
      }else{
        returnValue = true;
      }
    });
  }else{
    returnValue = false;
  }
  return returnValue;
}

console.log(same([1,2,3],[4,1,9]));
console.log(same([1,2,3],[1,9]))
console.log(same([1,2,1],[4,4,1]))