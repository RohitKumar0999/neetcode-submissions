class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        /* Optimized Solution  */
        function optimizedSolution(nums, target) {
            let numMap = new Map();
            
            // traverse nums and store each element with it's idx and check the second ele.
            for (let i = 0; i < nums.length; i++) {
                let diff = target - nums[i];

                if (numMap.has(diff)) {
                    return [numMap.get(diff),i]
                }
                numMap.set(nums[i], i);
            }
        }
        function solution1(nums, target) {
            let i = 0;
            let j = nums.length - 1;
            while (i < j) {
                let sum = nums[i] + nums[j];
                console.log("i", i, "j", j);
                console.log("sum", sum);

                if (sum === target) return [i, j];
                else if (sum > target) {
                    console.log("Sum is greater");
                    if (nums[i + 1] < nums[i]) {
                        console.log("Inc", i);
                        i++;
                    } else if (nums[j - 1] < nums[j]) {
                        console.log("Dec", j);
                        j--;
                    } else {
                        i++;
                        j--;
                        console.log("IncDec");
                    }
                } else {
                    if (nums[i + 1] > nums[i]) {
                        console.log("Inc");
                        i++;
                    } else if (nums[j - 1] > nums[j]) {
                        j--;
                        console.log("Dec");
                    } else {
                        i++;
                        j--;
                        console.log("IncDec");
                    }
                }
            }
        }

        function solution2(nums, target) {
            nums.sort((a, b) => a - b);
            let i = 0,
                j = nums.length - 1;

            while (i < j) {
                console.log("i", i, "j", j);
                let sum = nums[i] + nums[j];
                console.log("sum", sum);
                if (sum === target) {
                    console.log("sum matches");
                    return [i, j];
                } else if (sum > target) {
                    console.log("dec");
                    j--;
                } else {
                    console.log("inc");
                    i++;
                }
            }
        }

        // calling solution 1
        return optimizedSolution(nums, target);
    }
}
