class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // bruteForce Way
        const bruteForce = (nums) => {
            let maxLen = 0;
            let numMap = new Map();
            for (let num of nums) {
                numMap.set(num, true);
            }
            for (let i = 0; i < nums.length; i++) {
                let curr = nums[i];
                let len = 0;

                while (true) {
                    if (numMap.has(curr)) {
                        len++;
                    } else {
                        break;
                    }
                    curr=curr+1;
                }

                maxLen = Math.max(len,maxLen)
            }

            return maxLen;
        };

        return bruteForce(nums);
    }
}
