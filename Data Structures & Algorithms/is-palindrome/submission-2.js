class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function bruteForce(s) {
            let newStr = "";

            for (let char of s) {
                let smallCaseChar = char.toLowerCase();
                if (
                    (smallCaseChar.charCodeAt(0) >= 97 && smallCaseChar.charCodeAt(0) <= 122) ||
                    (smallCaseChar.charCodeAt(0) >= 48 && smallCaseChar.charCodeAt(0) <= 57)
                ) {
                    newStr += smallCaseChar;
                }
            }

            let i = 0,
                j = newStr.length - 1;
            while (i < j) {
                if (newStr[i] !== newStr[j]) {
                    return false;
                }

                i++;
                j--;
            }

            return true;
        }

        function isNonAlphaNumeric(char) {
            if (
                (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
                (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ||
                (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
            ) {
                return false;
            } else {
                return true;
            }
        }

        function optimalSolution(s) {
            let i = 0,
                j = s.length - 1;
            while (i < j) {
                if (isNonAlphaNumeric(s[i])) {
                    i++;
                    continue;
                }

                if (isNonAlphaNumeric(s[j])) {
                    j--;
                    continue;
                }

                if (s[i]?.toLowerCase() !== s[j]?.toLowerCase()) {
                    return false;
                } else {
                    i++;
                    j--;
                }
            }

            return true;
        }

        return optimalSolution(s);
    }
}
