class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxAreaBruteForce(heights) {
        let res = 0;
        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                let capacity = (j - i) * Math.min(heights[i], heights[j]);
                res = Math.max(res, capacity);
            }
        }
        return res;
    }

    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxAreaOptimalSolution(heights) {
        let i = 0,
            j = heights.length - 1;
        let res = 0;

        while (i < j) {
            let curr = (j - i) * Math.min(heights[i], heights[j]);
            res = Math.max(curr, res);

            if (heights[i] < heights[j]) {
                let prev = heights[i];
                i++;
                while (i < j && prev > heights[i]) {
                    i++;

                }
            } else {
                let endPrev = heights[j];
                j--
                while (i < j && endPrev > heights[j]) {
                    j--;
                }
            }
        }

        return res;
    }

    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // return this.maxAreaBruteForce(heights);
        return this.maxAreaOptimalSolution(heights);
    }
}
