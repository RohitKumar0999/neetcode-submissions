class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // logic to check is their any duplicate in each row/column
        for (let i = 0; i < board.length; i++) {
            let set = new Set();
            for (let j = 0; j < board[0].length; j++) {
                if (set.has(board[i][j])) {
                    console.log("set", set);
                    console.log("duplicate in row");
                    return false;
                }
                if(board[i][j]!='.')set.add(board[i][j]);
            }
        }

        // traverse each column
        for (let col = 0; col < board[0].length; col++) {
            let set = new Set();
            for (let row = 0; row < board.length; row++) {
                console.log("COl set","col",col, set);
                if (set.has(board[row][col])) {
                    console.log("duplcolcate coln col");
                    return false;
                }
                if (board[row][col] != ".") set.add(board[row][col]);
            }
        }

        // now need to check each box of 9 boxes
        for (let i = 0; i < board.length; i = i + 3) {
            for (let j = 0; j < board[0].length; j = j + 3) {
                let lastRowIdx = i + 2;
                let lastColIdx = j + 2;
                let blockSet = new Set();

                // traversing each block
                for (let k = i; k <= lastRowIdx; k++) {
                    for (let l = j; l <= lastColIdx; l++) {
                        if (blockSet.has(board[k][l])) {
                            return false;
                        }
                        if (board[k][l] != ".") blockSet.add(board[k][l]);
                    }
                }
            }
        }

        return true; // passes all conditions
    }
}
