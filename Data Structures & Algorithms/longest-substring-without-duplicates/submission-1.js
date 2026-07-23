class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let mySet = new Set();
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            while (mySet.has(s[r])) {
                mySet.delete(s[l]);
                l++;
            }
            mySet.add(s[r]);
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
