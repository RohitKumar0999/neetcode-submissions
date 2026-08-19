class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i=0;
        let j=nums.length-1;


        while(i<=j){
        let mid = Math.floor((i+j)/2);
        if(target>nums[mid]){
            i=mid+1
        }
        else if(target<nums[mid]){
            j=mid-1;
        }
        else{
            return mid;
        }

        }

        return -1;
    }
}
