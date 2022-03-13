
function degree(a,n){ // степень числа

    return n === 1 ? a : a * degree(a , n - 1);

}

console.log(degree(1,5)) // 1
console.log(degree(2,10)) // 1024
console.log(degree(5,5)) // 3125

