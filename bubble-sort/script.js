function bubbleSort(arr){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < (arr.length - i - 1); j++){
            if(arr[j] > arr[j+1]){
                let lesser = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = lesser
            }
        }
    }
    return arr
}

console.log(bubbleSort([2,3,1,35,63,1]))