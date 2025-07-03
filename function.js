function findEvenIndex(arr) {
  
if(arr.every(num=> num == 0)) return 0
  
   
  for(let i = 0; i < arr.length; i+=1){
    
    const newArr = [...arr]
    newArr.splice(i,1) // [2]
    let left = newArr.splice(0,i).reduce((tandin, b)=> tandin + b,0);
    let right = newArr.reduce((tandin, b)=> tandin + b,0);

    if (left == right){
       return i
    } 
   
   
  }
  return -1;
    
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) // [4,3,2,1]