function isSame(arr1, arr2) {
    let count = 0;

    if(Array.isArray(arr1) != true || Array.isArray(arr2) != true) {
        return 'Invalid';
    }

    if(arr1.length != arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            count++;
        }
    }

    if(count === arr1.length) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isSame([1, 2, 3], [1, 2, 3]));
console.log(isSame([34, 5, 7, 9], [34, 5, 7]));
console.log(isSame([1, undefined, 3], [1, null, 3]));
console.log(isSame([1, 4, 5], [1, 4, 5]));
console.log(isSame([1, "4", 4], [1, 4, 4]));
console.log(isSame([2, 5, 6], 256));
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));