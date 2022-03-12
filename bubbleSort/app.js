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


function bubbleSort(n) { // сортировка пузырьком

    const arr = shuffle(n);

    for (let i = 0; i < arr.length - 1; i++) { // общая длина массив - 1

        for (let j = 0; j < arr.length - 1 - i; j++) { // общая длина массив - 1 и минус пройденные элементы из внешнего цикла

            if (arr[j] > arr[j + 1]) { // если настоящий элемент больше чем следующий, то происходит замена
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // замена по примеру ниже (работает в js быстрее и меньше заданых переменных во время замены)
                
                // let tmp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = tmp;

            }

            console.log(arr); // выводим массив

        }

    }

    return arr; // возвращаем массив из функции

}

bubbleSort(6);