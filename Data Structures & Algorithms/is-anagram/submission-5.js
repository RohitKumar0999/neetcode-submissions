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
    - store both string's char in map 
    - traverse each map with it's respective keys and compare the freq. of each char or existance with other map
    - While return check both have same keys length which means no char left for comparison.
    T.C => O(3N) => O(N)
    S.C => O(2N) => O(N)
    */

        // let map1 = new Map();

        // for (let char of s) {
        //     map1.set(char, (map1.get(char) ?? 0) + 1);
        // }

        // let map2 = new Map();

        // for (let char of t) {
        //     map2.set(char, (map2.get(char) ?? 0) + 1);
        // }

        // for (let key of map1.keys()) {
        //     // console.log("val1",map1.get(key),"val2",map2.get(key))
        //     if (map1.get(key) !== map2.get(key)) return false;
        // }

        // return map1.size === map2.size;

        // --------------------------------------------------

        /*
        -------------------------------------------------
         Solution: 2
         - Sort both strings
         - compare both strings after sorting
         T.C=> O(mlog(m)+nlog(n))
         S.C=> O(1)
          */

        // if (s.length !== t.length) return false;
        // s = s.split("").sort().join("");

        // t = t.split("").sort().join("");

        // return s === t;
        
        // --------------------------------------------------

        /*
        Soution: 3
        - As we have only alhabets here we create an array of size 26
        - linearly traverse both string same time and increment at each index
        - if all index does'nt have val zero means either some char is missing or high in freq. in one of string

        */

        if(s.length!==t.length) return false;
        let arr = new Array(26).fill(0)

        for(let i=0;i<s.length;i++){
            arr[s.charCodeAt(i)-97]++
            arr[t.charCodeAt(i)-97]--;
        }

       return arr.every(ele=>(ele===0))

    }
}
