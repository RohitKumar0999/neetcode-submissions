class Solution {
    /**
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
    characterReplacement(s, k) {
        return this.characterReplacementBruteForce(s, k);
    }
}
