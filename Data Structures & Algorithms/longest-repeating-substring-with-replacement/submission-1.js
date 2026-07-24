class Solution {
    /**
     * Approach Brute Force with variable sliding window  & freq of char
     *  - We traverse each possible combination of string and store the frequncy-
     *    of the each char and also store maxFreq char in window
     *  - Total no. of chars need to be replcaed is equal to the window size - maxFreq Char to -
     *    make the string of similar character but wee need to be take care that no. of change operation
     *  - So while calc max string we do only until we can do operation upto k
     * T.C & S.C => O(N^2) & O(N)
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacementBruteForce(s, k) {
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            let count = new Map();
            let maxFreq = 0;

            for (let j = i; j < s.length; j++) {
                count.set(s[j], (count.get(s[j]) || 0) + 1);
                maxFreq = Math.max(maxFreq, count.get(s[j]));

                if (j - i + 1 - maxFreq <= k) {
                    res = Math.max(res, j - i + 1);
                }
            }
        }
        return res;
    }

    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacementOptimized(s, k) {
        let charSet = new Set(s);
        let res = 0;

        for (let c of charSet) {
            let l = 0;
            let count = 0;

            for (let r = 0; r < s.length; r++) {
                if (s[r] === c) {
                    count++;
                }

                while (r - l + 1 - count > k) {
                    if (s[l] === c) {
                        count--;
                    }
                    l++;
                }
                res = Math.max(res, r - l + 1);
            }
        }

        return res;
    }
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // return this.characterReplacementBruteForce(s, k);
        return this.characterReplacementOptimized(s, k);
    }
}
