class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        function bruteForce(s){
            let newStr = "";

            for(let char of s){
                let smallCaseChar = char.toLowerCase();
                if((smallCaseChar.charCodeAt(0)>=97 && smallCaseChar.charCodeAt(0)<=122) ||
                (smallCaseChar.charCodeAt(0)>=48 && smallCaseChar.charCodeAt(0)<=57)){
                    newStr+=smallCaseChar;                    
                }
            }

            let i=0,j= newStr.length-1;
console.log("new Str",newStr)
            while(i<j){
console.log("first",newStr[i],"Sceond", newStr[j], "Comparision",newStr[i]!=newStr[j])
                if(newStr[i]!==newStr[j]){
                    return false;
                }

                i++;
                j--;
            }

            return true;
        }

        return bruteForce(s)
    }
}
