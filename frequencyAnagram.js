function anagram(a,b){
    if(a===b){
        return true;
    }
    let frequencyA = {};
    let frequencyB = {};
    for(let i of a){
        frequencyA[i]= (frequencyA[i] || 0)+1;
    }
    for(let i of b){
        frequencyB[i]= (frequencyB[i] || 0)+1

    }
    console.log(frequencyA,frequencyB)
    for(let key in frequencyA){
        if(!(key in frequencyB)){
            return false
        }
        if(frequencyB[key]!== frequencyA[key]){
            return false;
        }
    }
    return true;
}
console.log(anagram('',''));
console.log(anagram('aaz','zaa'));

console.log(anagram('anagram','nagaram'));
console.log(anagram('rat','cat'))
