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
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
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
            // return this.maxProfitBruteFroce(prices);
        
    }
}
