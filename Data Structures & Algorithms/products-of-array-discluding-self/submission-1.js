class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];

        // Brute Force Approach

        // for(let i=0;i<nums.length;i++){

        //     let left = i-1;
        //     let right = i+1;
        //     let product = 1;

        //     while(left>=0 || right<nums.length){

        //         if(left>=0){
        //             product=product*nums[left]
        //             left--;
        //         }

        //         if(right<nums.length){
        //             product  = product*nums[right];
        //             right++;
        //         }
        //     }

        //     res.push(product)
        // }
        // return res;


        // Optimize solut with prefix and postfix array to maintain prev. and post. product of each val
        let length = nums.length;
        let pref = new Array(length)

        for (let i = 0; i < length; i++) {
            pref[i] = (pref[i - 1] ?? 1) * nums[i];
        }

        let post = new Array(length);

        for(let j=length-1;j>=0;j--){
            post[j] = (post[j+1] ?? 1) * nums[j]
        }


        // linear traverse and find product for all execpt self for each val
        for(let k=0;k<nums.length;k++){
           let product = (pref[k-1] ?? 1) * (post[k+1] ?? 1);
           res.push(product)
        }
        
        return res;
    }
}
