const  initArray = (n) => {

    let arr = [];

    for(let i = 1; i <= n; i++){

        arr.push(i);

    }

    return arr;

}


const shuffle = (input_number) => {

    let arr = initArray(input_number);

    for(let i = arr.length - 1; i > 0; i--){

        let tmp = arr[i];

        let rnd = Math.floor(Math.random() * (i * 1)) // рамдомное число (до индекса i) и округление его до целочисленного

        arr[i] = arr[rnd]; // просто заменяем элемент массива на рандомно сгенерированый индекс
        arr[rnd] = tmp; // меняем местами arr[i] и arr[rnd]

    }

    return arr;

}
   
const sort = (array) => {

    console.log('Деление массива', ...array)

    let length = array.length; // узнаем длину массива

    let mid = Math.floor(length * 0.5); // получаем среднуюю массива

    let left = array.slice(0, mid); // делим

    let right = array.slice(mid, length);  // делим

    if (length === 1) // если 1 вернём массив
        return array;

    return merge(sort(left), sort(right)); // иначе повторяем до 1 элемента в массивах

}

const merge = (left, right) => {

    let result = [];

    while (left.length || right.length) { // слияние до последнего элемента массива одного из них

        if (left.length && right.length) { // при одинаковой длине

            if (left[0] < right[0]) { // проверяем первый элемент массивов

                console.log('первый массив больше второго |  длина массивов идентична', left[0], right[0]);

                result.push(left.shift()); // если 1 элемент первого массива меньше чем 1 элемент второго массива то производим слияние в результирующий массив

            } else {

                console.log('второй массив больше первого | длина массивов идентична', left[0], right[0]);

                result.push(right.shift()); // если 1 элемент второго массива меньше чем 1 элемент первого массива то производим слияние в результирующий массив

            }

        } else if (left.length) {

            console.log('первый массив больше второго | длина первого массива больше', left[0], right[0]);

            result.push(left.shift()); // если первый массив больше второго пушим результат в результурующий массив

        } else {

            console.log('первый массив больше второго | длина второго массива больше', left[0], right[0]);

            result.push(right.shift()); // если второй массив больше первый пушим результат в результурующий массив
        
        }

    }

    return result; // вернем результирующий массив

}

console.log('sort array: ' , ...sort(shuffle(10)));