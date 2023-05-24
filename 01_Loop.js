let array = ["정", "승", "수"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (arr of array) {
    console.log(arr);
}

array.map((arr) => {
    console.log(arr);
});
