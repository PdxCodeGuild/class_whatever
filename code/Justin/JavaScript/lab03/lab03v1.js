let array = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9,]

// let (peaks(data)){

//     for i in range(1, len(data)-1);
//         if data[i - 1] < data[i] > data[i + 1];
//             alert(i)
// }

// let (valleys(data)){

    
    
    function peaks(array){
        let output = [];
        for (let i=1; i<array.length-1; i++) {
            if (array[i-1] < array[i] && array[i+1] < array[i]) {
                output.push(i);
            }
        }
        return output;
    }

    // function solutio{
    //     var storage = [], counter = 0;
    //     for(var i = 1; i < A.length - 1; i++) {
    //       if (A[i] > A[i-1] 
    //           storage.push(i);
    //       }
    
    function valleys(array){
        let output = [];
        for (let i=1; i<array.length-1; i++) {
            if (array[i-1] > array[i] && array[i+1] > array[i]) {
                output.push(i);
            }
        }
        return output;
        
    }
    
    function peaks_and_valleys(array){
        let peaks_two = peaks(array);
        let valleys_two = valleys(array);
        return peaks.concat(valleys);
        
    }

    // def max_profit(prices)
    // start = prices
    // #default case which returns 0 if prices only decreases over time
    // if prices.all? {|n| n < start}
    //     return 0

    alert(peaks(array))
    console.log(peaks(array))
    alert(valleys(array))
    console.log(valleys(array))
    alert(peaks_and_valleys(array))
    console.log(peaks_and_valleys(array))

//     for i in range(1, len(data)-1);
//         if data[i - 1] > data[i] < data[i + 1];
//             alert(i)
// }

// let (peaks_and_valleys(data)){

//     for i in range(1, len(data)-1):
//         if data[i - 1] < data[i] > data[i + 1]:
//             alert(i)

//         else if data[i - 1] > data[i] < data[i + 1]:
//             alert(i)
// }
        

peaks_and_valleys(array)