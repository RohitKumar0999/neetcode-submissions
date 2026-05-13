class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        function approach1(strs) {
            let map = new Map();

            for (let val of strs) {
                let key = [...val].sort().join("");

                if (!map.has(key)) {
                    map.set(key, [val]);
                } else {
                    map.set(key, [...map.get(key), val]);
                }
            }

            let res = [];

            for (let val of map.values()) {
                res.push(val);
            }
            console.log("reess", res);
            return res;
        }

        function approach2(strs) {
            let res = {};

            for (let s of strs) {
                let strArr = new Array(26).fill(0);

                for (let char of s) {
                    strArr[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
                }
                let key = String(strArr);
                if (!res[key]) {
                    res[key] = [];
                }
                res[key].push(s);
            }

            return Object.values(res);
        }

        return approach2(strs);
    }
}
