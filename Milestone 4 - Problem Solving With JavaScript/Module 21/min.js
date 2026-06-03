const prices = [20000, 16000, 50000, 100000, 120000, 30000, 35000];

function getMin(prices) {
    let minPrice = prices[0];

    for(let i = 1; i < prices.length; i++) {
        if(minPrice > prices[i]) {
            minPrice = prices[i];
        }
    }

    return minPrice;
}

console.log('Cheapest one is: ', getMin(prices));