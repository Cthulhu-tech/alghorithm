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


const insertionSort = (n) => { // сортировка вставками

    const arr = shuffle(n)

    console.log(arr);

    for (let i = 1, l = arr.length; i < l; i++) {

        const current = arr[i]; // задает переменную на данном обходе которая будет заменена

        let j = i; // задаем j равной i, от которой будет уменьшение до меньшего элемента чем заданный в current, либо до самого начала массива, после происходит замена элемената

        while (j > 0 && arr[j - 1] > current) { // проверка на начало элемента и на размер элемента

            arr[j] = arr[j - 1]; // заменяем элемент массива arr[j] = arr[j - 1]
            j--; // уменьшение j

        }
        
        arr[j] = current; // j элемент на выбранный нами в начале первого цикла (current)

        console.log(arr);
    }

    return arr; // возвращаем массив из функции

}


insertionSort(6);