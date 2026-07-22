class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfitBruteFroce(prices) {
        let profit = 0;
        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                let currProfit = prices[j] - prices[i];
                profit = Math.max(profit, currProfit);
            }
        }
        return profit;
    }

     /**
      *Approach: here is optimized approach
      - Until second pointer points out of scope iterate & calculate profit 
      - As we know second pointer always remains after first pointre bcz we -
        can't sale before buy date
     * T.C & S.C: O(N) & O(1)
     * @param {number[]} prices
     * @return {number}
     */
    maxProfitOptimized(prices) {
        let i = 0;
        let j = 1;
        let res = 0;
        while (j < prices.length) {
            let profit = prices[j] - prices[i];
            console.log("Each Profit", profit)

            if (profit < 0) {
                i++;
            } else if (profit > 0) {
                res = Math.max(profit, res);
                j++;
            } else {
                j++;
            }
        }

        return res;
    }

     /**
      * Approch: -Same approach as optimized with clear code.
      - right pointer always increase & left pointer equal to it when there is no profit
     * T.C & S.C: O(N) & O(1)
     * @param {number[]} prices
     * @return {number}
     */
    maxProfitOptimal(prices) {
        let l =0;
        let r= 1;
        let maxProfit = 0;

        while(r<prices.length){
            if(prices[l]<prices[r]){
                let profit = prices[r]-prices[l];
                maxProfit = Math.max(maxProfit,profit);
            }
            else{
                l = r
            }
            r++;
        }
        return maxProfit;
    }


    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       return this.maxProfitOptimal(prices);
            // return this.maxProfitBruteFroce(prices);
        
    }
}
