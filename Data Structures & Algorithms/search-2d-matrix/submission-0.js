class Solution {
    bruteForce(matrix,target){
        const nums = matrix.flat(); 

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
            return true;
        }

        }

        return false;

    }
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        return this.bruteForce(matrix,target)
    }
}
