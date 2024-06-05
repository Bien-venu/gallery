### Photo Gallery
Go Live [here].

# Code Challenge Solutions

This repository contains solutions to two coding challenges: Array Manipulation and String Transformation, and to see the solution of each you will use gallery page terminal, thanks

## Array Manipulation Challenge

### Problem Statement
The Array Manipulation challenge involves finding a subarray in an array that sums up to a given target value.

### Approach
1. **Initialize Pointers:** Set two pointers, `start` and `end`, at the beginning of the array. Also, initialize a variable `current_sum` to track the sum of the current subarray.
2. **Expand Window:** Iterate over the array with the `end` pointer, adding each element to `current_sum`.
3. **Contract Window:** If `current_sum` exceeds the target, increment the `start` pointer to reduce the window size and subtract the corresponding element from `current_sum`.
4. **Check for Target:** If at any point `current_sum` equals the target, return true.
5. **Completion:** If the `end` pointer reaches the end of the array without finding a subarray that sums up to the target, return false.


## String Transformation Challenge

### Problem Statement
The String Transformation challenge involves transforming a string based on certain rules related to its length.

### Approach
1. **Check the Length and Divisibility:** Determine the length of the input string and check if it is divisible by 3, 5, or 15 using the modulo operator (%).
2. **Handle Divisibility by 15:** If the length is divisible by 15 (i.e., both 3 and 5), perform both transformations in the specified order:
   - Reverse the string.
   - Replace each character with its ASCII code.
3. **Handle Divisibility by 3:** If the length is divisible by 3 but not by 5, reverse the string.
4. **Handle Divisibility by 5:** If the length is divisible by 5 but not by 3, replace each character with its ASCII code.
5. **Handle Other Cases:** If the length is not divisible by 3, 5, or 15, no transformation is needed, and the original string is returned.
6. **Return the Transformed String:** Return the transformed string based on the operations performed.