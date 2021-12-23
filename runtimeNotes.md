| array      | insert  | append |
| ----------- | ----------- | ----------- |
| xLargeArr      | 815.1158 ms |3.2363 ms |
|  largeArr  | 8.1839 ms | 437.1 μs |
| mediumArr | 203.3 μs | 166.4 μs |
| smallArr | 39.6 μs| 96.2 μs |
| tinyArr | 30.9 μs | 85.1 μs |

## Pattern Explanation:
#  With both of the provided functions we can observe that as the given array increases, the overall time increases as well. This makes sense - an array with more items in it will take more operations for each given item, therefore increasing our time for the function to complete. 
# The insert function runs faster for the tinyArr and smallArr, by ~50μs. Once we get to the mediumArr, the append function takes the lead for fastest performing and beats the insert function by ~50μs. For the largeArr, append will outperform insert by a much wider gap, with our insert function taking  ~8 MILLISECONDS versus our append function that takes ~437 MICROSECONDS. For the xLargeArr, insert will take a whopping ~815 MICROSECONDS to complete while our append function completes in ~3.2 MICROSECONDS. Given these results we can see that the append function scales much better than the insert function. This is most likely due to the fact that append will simply tack on the new number to the end of the array, and our insert function will tack our new number to the start of the array, subsequently having to shift each and every other number after it over by 1. With our smaller arrays we can see append outperform insert, once we get to the mediumArr the turn tables and append outperforms insert. We can tell by looking at the given times and undertstanding how the unshift() and push() methods work.