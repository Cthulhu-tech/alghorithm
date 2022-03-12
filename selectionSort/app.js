const selectionSort = (arr) => { // сортировка выборкой

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


selectionSort([2,5,6,1,4,3]);