class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length;
        while (i < j) {
            let sum = numbers[i] + numbers[j];
            if (sum === target) {
                return [i + 1, j + 1];
            }

            if (sum < target) {
                i++;
            } else {
                j--;
            }
        }
    }
}
