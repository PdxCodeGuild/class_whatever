// Define the following functions:
// 1. `peaks` - Returns the indices of peaks. A peak has a lower number on both the left and the right.
// 1. `valleys` - Returns the indices of 'valleys'. A valley is a number with a higher number on both the left and the right.
// 1. `peaks_and_valleys` - uses the above two functions to compile a single list of the peaks and valleys in order of appearance in the original data.
// Visualization of test data:
// | Data    |  1 | 2 | 3 | 4 | 5 | 6 | 7 | 6 | 5 | 4 | 5 | 6 | 7 | 8 | 9 | 8 | 7 | 6 | 7 | 8 | 9 |
// |---------|----|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
// | Index   |  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12| 13| 14| 15| 16| 17| 18| 19| 20|
// | POI     |    |   |   |   |   |   | P |   |   | V |   |   |   |   | P |   |   | V |   |   |   |
// Example I/O:
//                                                       X                 X
//                                                    X  X  X           X  X
//                               X                 X  X  X  X  X     X  X  X
//                            X  X  X           X  X  X  X  X  X  X  X  X  X
//                         X  X  X  X  X     X  X  X  X  X  X  X  X  X  X  X
//                      X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
//                   X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
//                X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
//             X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
// >>> data = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9]
// >>> peaks(data)
// [6, 14]
// >>> valleys(data)
// [9, 17]
// >>> peaks_and_valleys(data)
// [6, 9, 14, 17]
let data = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9];
alert(peaks(data))
alert(valleys(data))
alert(peaks_and_valleys(data))

function peaks(data){
    let result = [];
    for (let i=1; i<data.length-1; i++) {
        if (data[i-1] < data[i] && data[i+1] < data[i]) {
            result.push(i);
        }
    }
    return result;
}

function valleys(data){
    let result = [];
    for (let i=1; i<data.length-1; i++) {
        if (data[i-1] > data[i] && data[i+1] > data[i]) {
            result.push(i);
        }
    }
    return result
}

function peaks_and_valleys(data){
    let ps = peaks(data);
    let vs = valleys(data);
    return ps.concat(vs);
}