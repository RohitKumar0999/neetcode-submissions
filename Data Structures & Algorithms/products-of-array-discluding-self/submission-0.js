class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];

        // Brute Force Approach

        for(let i=0;i<nums.length;i++){

            let left = i-1;
            let right = i+1;
            let product = 1;

            while(left>=0 || right<nums.length){

                if(left>=0){
                    product=product*nums[left]
                    left--;
                }

                if(right<nums.length){
                    product  = product*nums[right];
                    right++;
                }
            }

            res.push(product)
        }
        return res;

    }
}
