class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfitBruteFroce(prices) {
        let profit = 0;
        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length ; j++) {
                let currProfit = prices[j] - prices[i];
                console.log("Profit", currProfit)
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
        return this.maxProfitBruteFroce(prices)
    }
}
