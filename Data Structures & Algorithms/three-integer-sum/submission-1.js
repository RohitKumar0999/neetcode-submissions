class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        function bruteForce(nums) {
            let resSet = new Map();;
            for(let i=0;i<nums.length-2;i++){
                for(let j=i+1;j<nums.length-1;j++){
                    for(let k=j+1;k<nums.length;k++){
                        if(nums[i]+nums[j]+nums[k]===0){
                            const sortedNum = [nums[i],nums[j],nums[k]].sort((a,b)=>a-b)
                            if(!resSet.get(`${sortedNum}`)){
                            resSet.set(`${sortedNum}`, sortedNum)
                            }
                        }
                    }
                }
            }

            // console.log(resSet)
            return [...resSet.values()]
        }


        function optimizedSol(nums){
            let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // if nums[i] is greater than zero as the next numbers are greater due non-decreasing order so next numbers can't be together form 0
        if (nums[i] > 0) {
            break;
        }
        // Same pairs come if consider duplicate so add up duplicate pair in result
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;
        let target = -nums[i];

        while (j < k) {
            const currentSum = nums[j] + nums[k];
            if (currentSum === target) {
                result.push([nums[i],nums[j],nums[k]])

            while(j<k && nums[j]===nums[j+1]){
                j++
            }

             while(j<k && nums[k]===nums[k-1]){
                k--;
            }
            j++;
            k--;
            }
            else if(currentSum>target){
                k--;
            }
            else{
                j++;
            }
        }

    }

    return result;
        }

        return optimizedSol(nums)
    }
}
