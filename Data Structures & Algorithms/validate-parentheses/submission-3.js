class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        //    ([{}])
        // let arr = [];

        // let match = {
        //     ")": "(",
        //     "]": "[",
        //     "}": "{",
        // };
        // let count = {};

        // for (let char of s) {
        //     console.log("stack", arr);
        //     if (char === "[" || char === "{" || char === "(") {
        //         arr.push(char);
        //         count[char] = (count[char] || 0) + 1;
        //         continue;
        //     } else {
        //         const startChar = match[char];
        //         console.log("Curr Char", char, "matching Char", startChar);
        //         if (!count[startChar]) {
        //             return false;
        //         }

        //         count[startChar]--;
        //         arr.push(char);
        //     }
        // }

        // return true;

        if(s.length<2)return false;

        let stack = [];

        let match = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (let char of s) {
            if (char === "[" || char === "{" || char === "(") {
                stack.unshift(char);
                continue;
            }

            let popEle = stack.shift();

            if (!popEle) return false;

            let startBracket = match[char];

            if (popEle !== startBracket) {
                return false;
            }
        }
        return stack.length?false:true;
    }
}
