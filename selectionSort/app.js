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


const selectionSort = (n) => { // сортировка выборкой

    const arr = shuffle(n)

    console.log(arr);

    for (let i = 0; i < arr.length - 1; i++) {

        let indexMin = i; // выбираем минимальный индекс

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[indexMin] > arr[j]) {

                indexMin = j; // задаем минимальный индек при сравнении с предыдущим элементов (prevState)

            }

        }
        
        if (indexMin !== i) { // если минимальный индекс не равен i, напривер (arr[6] !== arr[9])

            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]; // заменяем элемент массива, аналагично нижнему коду.

            // let tmp = arr[i]
            // arr[i] = arr[indexMin]
            // arr[indexMin] = tmp

        }

        console.log(arr); // вывод измененого на данный момент шага массива

    }

    return arr; // возвращаем массив из функции

}


selectionSort(6);