class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        function approach1(strs){

            let map = new Map();

            for(let val of strs){
                let key = [...val].sort().join('');

                if(!map.has(key)){
                    map.set(key,[val])
                }
                else{
                    map.set(key,[...map.get(key), val])
                }
            }

            let res = [];

            for(let val of map.values()){
                res.push(val)
            }
            console.log("reess",res)
            return res;
        
        }

        return approach1(strs); 
    }
}
