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

        return bruteForce(nums)
    }
}
