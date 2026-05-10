class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        /* -----------------------------
         Soluton-1 (better solution)
        T.C => O(N) (traversing the array just once)
         S.C => O(N) (Map storing array)
         */
        let numMap = new Map();
        for (let num of nums) {
            if (numMap.has(num)) {
                return true;
            } else {
                numMap.set(num);
            }
        }
        return false;
        /*---------------------------------
        Solution-2:
        => similar kind solution but in short
        */
        return new Set(nums).size > nums.length;

        /*
        Solution 3:
        -First sort the array and check is there any adjacent element is identical
        T.C=> O(Nlog(N))
        S.C=> O(1)
        */
        nums.sort();
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]==nums[i+1]){
                return true;
            }
        }
        return false;
    }
}
