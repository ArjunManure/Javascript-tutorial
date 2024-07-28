let array = [1, 2, 3, "arjun", "manure", "null", [1, 23, 4]];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
};

const number = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let j = 0; j < number.length; j++) {
    const row = number[j];
    console.log(`for row : ${j + 1}`)
    for (let k = 0; k < row.length; k++) {
        console.log(row[k]);
    }
}    