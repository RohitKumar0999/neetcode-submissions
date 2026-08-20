class Solution {
    bruteForce(matrix, target) {
        const nums = matrix.flat();

        let i = 0;
        let j = nums.length - 1;

        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            if (target > nums[mid]) {
                i = mid + 1;
            } else if (target < nums[mid]) {
                j = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
// Here we consider 
    mostOptimizedSol(matrix,target){
        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        let l=0;
        let r = ROWS*COLS-1;

        while(l<=r){
            let m = Math.floor((l+r)/2);

            let row = Math.floor(m/COLS);
            let col = m%COLS;

            if(target>matrix[row][col]){
                l = m+1
            }
            else if(target<matrix[row][col]){
                r = m-1;
            }
            else{
                return true;
            }
        }
        return false;
    }
    /**
     * Approach: Search Row + Binary Search
     * -Here we first search the row in matrix which contains the element it's easy due to every row has sorted elements.
     * -Implement binary seach on sorted row
     * T.C=>O(log(m)+log(n))=>O(log(m+n))
     * S.C=>O(1)
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // return this.bruteForce(matrix,target)
        return this.mostOptimizedSol(matrix,target);

        let rows = matrix.length;
        let cols = matrix[0].length;

        // for(let i=0;i<=rows-1;i++){
        //     if(target>=matrix[i][0] && target<=matrix[i][cols-1]){
        //         exactRow = i;
        //         break;
        //     }
        // }

        // found the row by binary search
        let top = 0;
        let bottom = rows - 1;
        let row = 0;
        while (top <= bottom) {
            // check middle row
            row = Math.floor((top + bottom) / 2);
            // if target is greater than last ele. of curr row then move top to next of middle row
            if (target > matrix[row][cols - 1]) {
                top = row + 1;
            } else if (target < matrix[row][0]) { // if target is less than first ele. of curr row then move bottom to one less of middle row
                bottom = row - 1;
            } else {
                break; // it means either we found the eact row or there is now row where ele. present.
            }
        }

        if (top > bottom) return false;

        let i = 0;
        let j = matrix[row].length - 1;

        while (i <= j) {
            let mid = Math.floor((i + j) / 2);
            if (target > matrix[row][mid]) {
                i = mid + 1;
            } else if (target < matrix[row][mid]) {
                j = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
