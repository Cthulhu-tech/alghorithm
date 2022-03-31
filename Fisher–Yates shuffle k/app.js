function initArray (n) {

    let arr = [];

    for(let i = 1; i <= n; i++){

        arr.push(i)

    }

    return arr;

}


function shuffle (input_number_1, input_number_2) {

    let arr = initArray(input_number_2);

    for(let i = input_number_2 - 1; i > arr.length - input_number_1 - 1; i--){

        let tmp = arr[i];

        let rnd = Math.floor(Math.random() * (i * 1)) // рамдомное число (до индекса i) и округление его до целочисленного

        arr[i] = arr[rnd]; // просто заменяем элемент массива на рандомно сгенерированый индекс
        arr[rnd] = tmp; // меняем местами arr[i] и arr[rnd]

    }

    arr.length = input_number_1;

    return arr;

}

console.log(shuffle(3,5));
console.log(shuffle(6,10));