class Solution {
    /**
     * Approach Brute Force with variable sliding window  & freq of char
     *  - We traverse each possible combination of string and store the frequncy-
     *    of the each char and also store maxFreq char in window
     *  - Total no. of chars need to be replcaed is equal to the window size - maxFreq Char to -
     *    make the string of similar character but wee need to be take care that no. of change operation
     *  - So while calc max string we do only until we can do operation upto k
     * T.C => O(N^2)
     * S.C => O(N)
     * Where N is length of string
     *
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
     * Approach: Variable Sliding window & Set
     * - We take set of string intially so only compare the unique elements while traversing each time.
     * - Extending & Shrinking window based on given limit k,
     * - If at any we are failing the limit then we shrink the window from left pointer -
     *   also take care of max Frequency count
     * T.C => O(N*M)
     * S.C => O(M)
     * Where N is length of string and M is total number of Unique characters
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
    characterReplacementOptimal(s, k) {
        let res = 0;
        let count = new Map();
        let l = 0,
            maxFreq = 0;

        for (let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(s[r]));

            while (r - l + 1 - maxFreq > k) {
                count.set(s[l],count.get(s[l])-1)
                l++;
            }

            res = Math.max(res, r - l + 1);
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
        // return this.characterReplacementOptimized(s, k);
        return this.characterReplacementOptimal(s, k);
    }
}
