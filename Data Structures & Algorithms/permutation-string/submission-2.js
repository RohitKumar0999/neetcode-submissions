class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusionBruteForce(s1, s2) {
        let windowLen = s1.length;
        let sortedS1 = s1?.split("")?.sort()?.join("");

        for (let i = 0; i <= s2.length - windowLen; i++) {
            const substr = s2
                ?.split("")
                .slice(i, i + windowLen)
                ?.sort()
                ?.join("");
            // console.log("substr",substr,s1)
            if (substr == sortedS1) {
                return true;
            }
        }
        return false;
    }

    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusionOptimized(s1, s2) {
        let count1 = new Map();

        for (let c of s1) {
            count1.set(c, (count1.get(c) || 0) + 1);
        }

        let need = count1.size;

        for (let i = 0; i < s2.length; i++) {
            let count2 = new Map();
            let cur = 0;

            for (let j = i; j < s2.length; j++) {
                let char = s2[j];

                count2.set(s2[j], (count2.get(s2[j]) || 0) + 1);

                if ((count1.get(char) || 0) < (count2.get(char) || 0)) {
                    break;
                }

                if ((count1.get(char) || 0) === (count2.get(char) || 0)) {
                    cur++;
                }

                if (cur === need) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        return this.checkInclusionOptimized(s1, s2);
    }
}
