function woodQuantity(chair, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chair * perChairWood;
    const totalTableWood = table * perTableWood;
    const totalBedWood = bed * perBedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
}

const chairNumber = 0;
const tableNumber = 0;
const bedNumber = 1;

console.log('Wood needed ' + woodQuantity(chairNumber, tableNumber, bedNumber) + ' cft.');