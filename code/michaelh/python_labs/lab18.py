'''
# Lab 18: Peaks and Valleys

Define the following functions:

1. `peaks` - Returns the indices of peaks. A peak has a lower number on both the left and the right.

1. `valleys` - Returns the indices of 'valleys'. A valley is a number with a higher number on both the left and the right.

1. `peaks_and_valleys` - uses the above two functions to compile a single list of the peaks and valleys in order of appearance in the original data.

Visualization of test data:

| Data    |  1 | 2 | 3 | 4 | 5 | 6 | 7 | 6 | 5 | 4 | 5 | 6 | 7 | 8 | 9 | 8 | 7 | 6 | 7 | 8 | 9 |
|---------|----|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Index   |  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11| 12| 13| 14| 15| 16| 17| 18| 19| 20|
| POI     |    |   |   |   |   |   | P |   |   | V |   |   |   |   | P |   |   | V |   |   |   |


Example I/O:
```python
                                                      X                 X
                                                   X  X  X           X  X
                              X                 X  X  X  X  X     X  X  X
                           X  X  X           X  X  X  X  X  X  X  X  X  X
                        X  X  X  X  X     X  X  X  X  X  X  X  X  X  X  X
                     X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
                  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
               X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
            X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
>>> data = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9]
>>> peaks(data)
[6, 14]
>>> valleys(data)
[9, 17]
>>> peaks_and_valleys(data)
[6, 9, 14, 17]
```


## Version 2 (optional)

Using the `data` list above, draw the image of `X`'s above.

## Version 3 (optional)

Imagine pouring water into onto these hills. The water would wash off the left and right sides, but would accumulate in the valleys. Below the water is represented by `O`'s. Given `data`, calculate the amount of water that would be collected.

```
                                                  X  O  O  O  O  O  X
                                               X  X  X  O  O  O  X  X
                          X  O  O  O  O  O  X  X  X  X  X  O  X  X  X
                       X  X  X  O  O  O  X  X  X  X  X  X  X  X  X  X
                    X  X  X  X  X  O  X  X  X  X  X  X  X  X  X  X  X
                 X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
              X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
           X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
        X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
data = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9]

```
'''
def peaks(data):
    result = []
    for i in range(1, len(data)-1):
        if data[i - 1] < data[i] and data[i + 1] < data[i]:
            result.append(i)
    return result

def valleys(data):
    result = []
    for i in range(1, len(data)-1):
        if data[i - 1] > data[i] and data[i + 1] > data[i]:
            result.append(i)
    return result

def peaks_and_valleys(data):
    result = []
    for i in range(1, len(data)-1):
        if data[i - 1] > data[i] and data[i + 1] > data[i]:
            result.append(i)
        elif data[i - 1] < data[i] and data[i + 1] < data[i]:
            result.append(i)
    return result

# print(peaks(data))
# print(valleys(data))
# print(peaks_and_valleys(data))

data = [1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8, 9, 8, 7, 6, 7, 8, 9]
maximum = max(data)
peak = peaks(data)
valley = valleys(data)
if data[len(data) - 1] > data[len(data) - 2]:
    peak.append(len(data) - 1)
if data[0] > data[1]:
    peak.append(0)
# print(peak)
def between_two_peaks(i, peak):
    for j in range(1, len(peak)):
        if peak[j-1] < i < peak[j]:
            return True
    else:
        return False

def get_height_shortest_nearby_peak(i, peak, data):
    for j in range(1, len(peak)):
        if peak[j-1] < i < peak[j]:
            return min(data[peak[j-1]], data[peak[j]])

# print(between_two_peaks(17, peak))
for i in range(maximum):
    line_str = ' '
    for i, datum in enumerate(data):
        if datum >= maximum:
            line_str += 'x'
        elif between_two_peaks(i, peak):
            if get_height_shortest_nearby_peak(i, peak, data) > datum and get_height_shortest_nearby_peak(i, peak, data) >= maximum:
                line_str += 'O'
            else:
                line_str += ' '
        else:
            line_str += ' '
        line_str += '  '
    print(line_str)
    maximum -= 1
print(data)
# print(get_height_shortest_nearby_peak(9, peak, data))