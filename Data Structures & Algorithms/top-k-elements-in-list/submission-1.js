class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let val of nums) {
            map.set(val, (map.get(val) ?? 0) + 1);
        }

        const res = Array.from(map, ([key, value]) => ({ key, value })).sort((a, b) => b.value - a.value)?.slice(0,k)?.map(obj=>obj.key);

        return res;
    }
}
