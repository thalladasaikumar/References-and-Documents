1. for any number to find even or odd check for the rightmost bit is 1 or 0.

   (num & 1) == 0 -> Even
   (num & 1) == 1 -> Odd

2. Check if the number is a power of 2?

   (num & num-1) == 0 -> then num is a power of 2.

3. Arithmetic Left Shift by 1?

   (num << 1) -> gives output of num\*2

4. Arithmetic Right Shift by 1?

   (num >> 1) -> gives output of num/2

| Operation                               | example                   | before     | after      |
| --------------------------------------- | ------------------------- | ---------- | ---------- |
| not                                     | x = ~0111;                |            | 1000       |
| AND                                     | x = 0101 & 0011;          |            | 0001       |
| OR                                      | x = 0101 \| 0011;         |            | 0111       |
| XOR                                     | x = 0101 ^ 0011;          |            | 0110       |
| Left Shift                              | x = 0100 << 1;            |            | 1000       |
| Right Shift                             | x = 0100 >> 1;            |            | 0010       |
| Set bit 5                               | x                         | = (1<­<5); | 0b00000000 | 0b00100000 |
| Clear bit 5                             | x &= ~(1<<5);             | 0b11111111 | 0b11011111 |
| Wait until bit 5 is set                 | while (­!(x & (1<­­<5))); |
| Wait until bit 5 is cleared             | while (x & (1<­­<5));     |
| Save value of bit 5 into variable       | int var = x & (1<­­<5);   |
| Test if bit 5 is set                    | if (x & (1<­­<5)) {...}   |
| Toggle bit 5                            | x ^= (1<­­<5);            | 0b00000000 | 0b00100000 |
| Replace modulo of power of two with AND | x % y == x & (y -1)       | x % 64     | x & (63)   |
| Check if integer x is odd               | if (x & 1) { ... }        |
| Turn off the rightmost 1-bit            | x = x & (x-1);            | 0b01011000 | 0b01010000 |
| Isolate the rightmost 1-bit             | x = x & (-x);             | 0b01110000 | 0b00010000 |
| Right propagate the rightmost 1-bit     | x = x                     | (x-1);     | 0b10111100 | 0b10111111 |
| Isolate the rightmost 0-bit             | x = ~x & (x+1);           | 0b01110111 | 0b00001000 |
| Turn on the rightmost 0-bit.            | x = x                     | (x+1);     | 0b01110111 | 0b01111111 |
| Right propagate the rightmost 0-bit     | x = x & (x+1);            | 0b01110111 | 0b01110000 |
| Multiply by 2                           | x <<= 1;                  | 0b00000010 | 0b00000100 |
| Divide by 2                             | x >>= 1;                  | 0b00000010 | 0b00000001 |
| XOR swap                                | a ^= b; b ^= a; a ^= b;   |
| Calculate 2^n                           | 1 << n;                   |
| Convert letter to lowercase             | x = (x                    | ' ');      | A          | a |
| Convert letter to uppercase             | x = (x & '\_');           | a          | A          |
| Swap Nibbles                            | x = (x << 4)              | (x >> 4);  | 0b11110000 | 0b00001111 |

---

Usefull resource :

1. https://leetcode.com/problems/sum-of-two-integers/discuss/84278/A-summary:-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently
2. http://graphics.stanford.edu/~seander/bithacks.html
