//Q.1 2Sum
let array = [2,3,7,6]
const target =9
for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
        if(array[i]+array[j] == target && i<j){
            console.log([i,j])
            }
        }
    }