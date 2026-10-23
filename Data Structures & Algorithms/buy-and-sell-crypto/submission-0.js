class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP =  0

        for(let i=0; i<prices.length-1; i++){
            if(prices[i] < Math.max(...prices.slice(i+1))){
                maxP = Math.max(maxP, (Math.max(...prices.slice(i+1)) - prices[i]))
            }
        }

        return maxP
    }
}
