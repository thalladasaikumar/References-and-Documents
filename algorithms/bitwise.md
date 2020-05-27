1. for any number to find even or odd check for the rightmost bit is 1 or 0.
   (num & 1) == 0 -> Even
   (num & 1) == 1 -> Odd

2. Check if the number is a power of 2?
   (num & num-1) == 0 -> then num is a power of 2.

3. Arithmetic Left Shift by 1?
   (num << 1) -> gives output of num\*2

4. Arithmetic Right Shift by 1?
   (num >> 1) -> gives output of num/2

Usefull resource :

1. https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary:-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently
2. http://graphics.stanford.edu/~seander/bithacks.html
