// 1. push()
let fruits = ["apple", "banana"];
fruits.push("orange", "grape"); // Menambahkan dua elemen ke akhir array
console.log(fruits); // ["apple", "banana", "orange", "grape"]

// 2. pop()
let lastFruit = fruits.pop(); // Menghapus dan mengembalikan elemen terakhir
console.log(lastFruit); // "grape"
console.log(fruits); // ["apple", "banana", "orange"]

// 3. shift()
let firstFruit = fruits.shift(); // Menghapus dan mengembalikan elemen pertama
console.log(firstFruit); // "apple"
console.log(fruits); // ["banana", "orange"]

// 4. unshift()
fruits.unshift("pineapple", "mango"); // Menambahkan elemen di awal array
console.log(fruits); // ["pineapple", "mango", "banana", "orange"]

// 5. concat()
let vegetables = ["carrot", "broccoli"];
let food = fruits.concat(vegetables); // Menggabungkan dua array
console.log(food); // ["pineapple", "mango", "banana", "orange", "carrot", "broccoli"]

// 6. slice()
let slicedFood = food.slice(1, 4); // Mengambil sebagian array dari indeks 1 sampai 4 (tidak termasuk 4)
console.log(slicedFood); // ["mango", "banana", "orange"]

// 7. splice()
food.splice(2, 1, "strawberry", "blueberry"); // Menghapus 1 elemen mulai dari indeks 2, dan menambahkan 2 elemen
console.log(food); // ["pineapple", "mango", "strawberry", "blueberry", "orange", "carrot", "broccoli"]

// 8. indexOf()
let indexBanana = food.indexOf("banana"); // Mencari indeks dari "banana" (tidak ditemukan)
console.log(indexBanana); // -1 (karena "banana" sudah dihapus)

// 9. lastIndexOf()
let fruitsMore = ["apple", "mango", "apple", "orange"];
let lastIndexApple = fruitsMore.lastIndexOf("apple"); // Mencari indeks terakhir dari "apple"
console.log(lastIndexApple); // 2

// 10. forEach()
fruitsMore.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple
// 1: mango
// 2: apple
// 3: orange

// 11. map()
let foodLengths = food.map((item) => item.length); // Membuat array baru dengan panjang setiap elemen string
console.log(foodLengths); // [9, 5, 10, 9, 6, 6, 8]

// 12. filter()
let longFood = food.filter((item) => item.length > 6); // Menyaring elemen dengan panjang lebih dari 6 karakter
console.log(longFood); // ["pineapple", "strawberry", "blueberry"]

// 13. reduce()
let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce((acc, num) => acc + num, 0); // Menjumlahkan semua elemen dalam array
console.log(total); // 15

// 14. some()
let hasEven = numbers.some((num) => num % 2 === 0); // Memeriksa apakah ada elemen yang genap
console.log(hasEven); // true

// 15. every()
let allPositive = numbers.every((num) => num > 0); // Memeriksa apakah semua elemen positif
console.log(allPositive); // true

// 16. find()
let firstOdd = numbers.find((num) => num % 2 !== 0); // Mencari elemen pertama yang ganjil
console.log(firstOdd); // 1

// 17. findIndex()
let firstOddIndex = numbers.findIndex((num) => num % 2 !== 0); // Mencari indeks elemen pertama yang ganjil
console.log(firstOddIndex); // 0

// 18. includes()
let hasFour = numbers.includes(4); // Memeriksa apakah array berisi angka 4
console.log(hasFour); // true

// 19. sort()
let mixedNumbers = [5, 3, 8, 1, 2];
mixedNumbers.sort((a, b) => a - b); // Mengurutkan array secara ascending
console.log(mixedNumbers); // [1, 2, 3, 5, 8]

// 20. reverse()
mixedNumbers.reverse(); // Membalik urutan elemen dalam array
console.log(mixedNumbers); // [8, 5, 3, 2, 1]
