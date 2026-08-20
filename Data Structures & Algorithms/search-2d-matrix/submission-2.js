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
        // return this.bruteForce(matrix,target)
        
        let rows = matrix.length;
        let cols = matrix[0].length;

        let exactRow=-1;
       

        for(let i=0;i<=rows-1;i++){
            if(target>=matrix[i][0] && target<=matrix[i][cols-1]){
                exactRow = i;
                break;
            }
        }

        if(exactRow=== -1) return false;

        let i=0;
        let j=matrix[exactRow].length-1;
        
        while(i<=j){
        let mid = Math.floor((i+j)/2);
        if(target>matrix[exactRow][mid]){
            i=mid+1
        }
        else if(target<matrix[exactRow][mid]){
            j=mid-1;
        }
        else{
            return true;
        }

        }

        return false;


    }
}
