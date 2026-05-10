class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /*
    -------------------------------------------------
    solution:1
    */
        // let map1 = new Map();

        // for (let char of s) {
        //     map1.set(char, (map1.get(char) ?? 0) + 1);
        // }

        // let map2 = new Map();

        // for (let char of t) {
        //     map2.set(char, (map2.get(char) ?? 0) + 1);
        // }

        // console.log("map",map1,"map2",map2)

        // for (let key of map1.keys()) {
        //     // console.log("val1",map1.get(key),"val2",map2.get(key))
        //     if (map1.get(key) !== map2.get(key)) return false;
        // }

        // return map1.size === map2.size;
        // --------------------------------------------------

        /*
        -------------------------------------------------
         Solution: 2 */

        if (s.length !== t.length) return false;
        s = s
            .split("")
            .sort()
            .join("");
        t = t
            .split("")
            .sort()
            .join("");
        console.log("updated s", s, "updated t", t);

        return s === t;
        // --------------------------------------------------
    }
}
