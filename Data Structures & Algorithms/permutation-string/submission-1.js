class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let windowLen = s1.length;
       let sortedS1 =  s1?.split('')?.sort()?.join('');
    

        for(let i=0;i<=s2.length-windowLen;i++){
            const substr = s2?.split('').slice(i,i+windowLen)?.sort()?.join('');
            // console.log("substr",substr,s1)
            if(substr==sortedS1){
                return true;
            }
        }
        return false;

    }
}
