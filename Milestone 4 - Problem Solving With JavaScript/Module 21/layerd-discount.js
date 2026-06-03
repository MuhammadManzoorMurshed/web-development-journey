function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const secnd100Price = 90;
    const above200Price = 70;
    let total;

    if(quantity <= 100) {
        total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQunatity = quantity - 100;
        const remainingTotal = remainingQunatity * secnd100Price;
        total = first100Total + remainingTotal;

        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * secnd100Price;
        const remainingQunatity = quantity - 200;
        const remainingTotal = remainingQunatity * above200Price;
        total = first100Total + second100Total + remainingTotal;

        return total;
    }
}

console.log(layeredDiscountedTotal(201))