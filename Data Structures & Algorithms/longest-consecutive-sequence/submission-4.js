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

                while (numMap.has(curr)) {
                    len++;
                    curr = curr + 1;
                }

                maxLen = Math.max(len, maxLen);
            }

            return maxLen;
        };

        const betterApproach = (nums) => {
            if (!nums.length) return 0;
            nums.sort((a, b) => a - b);

            let curr = nums[0];
            let res = 0;
            let i = 0;
            let streak = 0;

            while (i < nums.length) {
                if (curr !== nums[i]) {
                    streak = 0;
                    curr = nums[i];
                }

                while (i < nums.length && nums[i] === curr) {
                    i++;
                }

                streak++;
                curr++;
                res = Math.max(res, streak);
            }
            return res;
        };

        const optimizedSol = (nums) => {
            const numSet = new Set(nums);
            let maxSeq = 0;

            for(let i=0;i<nums.length;i++){
                if(!numSet.has(nums[i]-1)){
                    let streak = 0;
                    let curr = nums[i];

                    while(numSet.has(curr)){
                        streak++;
                        curr = curr+1;
                    }

                    maxSeq = Math.max(maxSeq, streak)

                }
            }
            return maxSeq;
        };

        return optimizedSol(nums);
    }
}
