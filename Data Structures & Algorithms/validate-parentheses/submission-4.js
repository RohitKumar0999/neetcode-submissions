class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length<2)return false;

        let stack = [];

        let match = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (let char of s) {
            if (char === "[" || char === "{" || char === "(") {
                stack.push(char);
                continue;
            }

            let popEle = stack.pop();

            if (!popEle) return false;

            let startBracket = match[char];

            if (popEle !== startBracket) {
                return false;
            }
        }
        return stack.length?false:true;
    }
}
