//Tugas No 2
console.log("Tugas Nomor 2")
console.log("")

const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

const priceInJPY = 5000;
const priceInIDR = priceInJPY * currency.get("JPY");

console.log("Harga dalam IDR (Rupiah):", priceInIDR);
