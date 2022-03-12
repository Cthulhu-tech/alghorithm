function initArray (n) {

    let arr = [];

    for(let i = 1; i <= n; i++){

        arr.push(i);

    }

    return arr;

}


function shuffle (input_number) {

    let arr = initArray(input_number);

    for(let i = arr.length - 1; i > 0; i--){

        let tmp = arr[i];

        let rnd = Math.floor(Math.random() * (i * 1)) // рамдомное число (до индекса i) и округление его до целочисленного

        arr[i] = arr[rnd]; // просто заменяем элемент массива на рандомно сгенерированый индекс
        arr[rnd] = tmp; // меняем местами arr[i] и arr[rnd]

    }

    return arr;

}

console.log(shuffle(1));
console.log(shuffle(5));
console.log(shuffle(10));