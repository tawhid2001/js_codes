let arr = [13, 2, 15, 8, 1, 19, 5, 17, 12, 4, 20, 9, 14, 7, 3, 6, 10, 18, 11, 16]

for(let i = 0; i<arr.length; i++)
    {
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1])
                {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
        }
    }

console.log(arr)