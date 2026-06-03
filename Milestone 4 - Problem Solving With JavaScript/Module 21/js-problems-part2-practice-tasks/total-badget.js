function calculateElectronicsBudget(laptopQuantity,tabletQuatity, mobileQuantity) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const totalMoneyRequired = laptop * laptopQuantity + tablet * tabletQuatity + mobile * mobileQuantity;

    return totalMoneyRequired;
}

const totalBudget = calculateElectronicsBudget(2, 3, 1);
console.log(totalBudget);