class Solution {
 
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    bruteForce(tempratures) {
        let res = [];
        for (let i = 0; i < tempratures.length; i++) {
            let isFound = false;
            for (let j = i + 1; j < tempratures.length; j++) {
                if (tempratures[j] > tempratures[i]) {
                    isFound = true;
                    res.push(j - i);
                    break;
                }
            }

            if (!isFound) {
                res.push(0)
            }
        }
        return res;
    }

     
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    optimalSol(tempratures){
        let res = new Array(tempratures.length).fill(0);
        let stack = [];

        for(let i=0;i<tempratures.length;i++){

            while(stack.length && tempratures[i]>stack[stack.length-1][0]){
                let [ele,idx] = stack.pop();
                let noOfDays = i-idx;
                res[idx] = noOfDays;
            }
            stack.push([tempratures[i],i])
        }
        return res;
    }


    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // return this.bruteForce(temperatures)
        return this.optimalSol(temperatures)
    }
}
