class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxAreaBruteForce(heights) {
        let res = 0;
        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                let capacity = (j-i )* Math.min(heights[i], heights[j]);
                res = Math.max(res,capacity);
            }
        }
        return res;
    }

    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        return this.maxAreaBruteForce(heights);
    }
}
