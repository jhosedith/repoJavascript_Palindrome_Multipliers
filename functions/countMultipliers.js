function countMultipliers(arr) {
    let count = 0;
    let arrMultiploBoth = [];
    let arrMultiploOr = [];

    for (let num of arr) {
        if (num % 4 === 0 && num % 6 === 0) {
            count++;
            arrMultiploBoth[count-1]=num
        }
        else if(num % 4 === 0 || num % 6 === 0){
            count++
            arrMultiploOr[count-1]=num
        }
    }
    return {arrMultiploBoth, arrMultiploOr};
}

module.exports = countMultipliers;