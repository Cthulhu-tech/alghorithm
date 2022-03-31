function degree(a, n){ // степень числа


    if(n !== 0){
        
        return n > 0 ? a * degree(a , n - 1) : 1 / a * degree(a , n + 1);

    }
    return 1;


}


console.log(degree(-4, -1)) // -0.25
console.log(degree(1,-1)) // 1
console.log(degree(2,10)) // 1024
console.log(degree(5,-6)) // 0.000064
console.log(degree(25,-2)) // 0.0016
console.log(degree(10, 0)) // 1 - в общем, так будет всегда
console.log(degree(-4, 5)) // -1024
