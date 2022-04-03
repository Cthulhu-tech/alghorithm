const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (answer) => {

  const input = Number(answer);

  if(isNaN(input)){

    console.error(`Invalid input! ${input}`);

  }else{

    Main(answer.toString());

  }

  rl.close();

});


const Main = (number) => {

  outputLogic(number);

}

const outputLogic = (number) => {

  for(let i = 0; i < number.length + 1; i++) {

    output(number, i)

  }
  
  checkEndState(number);

}

const output = (number, i) => {

  let str = "";

  for(let j = 0; j < number.length; j++) {

    if(i !== j){

      if(j === 0) {

        str += `a0 ${number[j]} `;

        if(number.length === 1){

          str += '(a0)q2 a0';

        }

      }else if(number.length === i && j === number.length - 1){

        str += ` ${number[j]} (a0)q2 a0`

      }else if (j === number.length - 1) {

        str += ` ${number[j]} a0`;

      }else{

        str += ` ${number[j]} `;

      }

    }else{

      let tmp =  '';

      if(j === 0) {

        if(number.length === 1){

          tmp = `a0 (${number[i]})q1 a0`;

        }else{

          tmp = `a0 (${number[i]})q1 `;

        }

      }else if (j === number.length - 1) {

        tmp = ` (${number[j]})q1 a0`;

      }else{

        tmp = ` (${number[i]})q1 `;

      }

      str += tmp;

    }

  }

  console.log(...str);
  console.log('----------------------------------------------------');
}


const checkEndState = (array) => {

  let str = '';
  let q = '';
  const last = Number(array[array.length - 1]);

  if(last === 1 || last === 3 || last === 5 || last === 7 || last === 9){

    q = 3;

  }else{

    q = 4;

  }
  for(let i = 0; i < array.length; i++) {

      if(i === 0) {

        if(array.length === 1){

          str += `a0 (${array[i]})q3 a0`;

        }else{

          str += `a0 ${array[i]} `;

        } 
  
      }else if(array.length - 1 === i) {
  
        str += ` (${array[i]})q${q} a0`;
  
      }else{
  
        str += ` ${array[i]} `;
  
      }

  }

  console.log(...str);
  console.log('----------------------------------------------------');
  lastState(array, q);

}

const lastState = (array, q) => {

  let str = "";

  for(let i = 0; i < array.length + 1; i++) {

    if(i === 0) {

      str += `a0 ${array[i]} `;

    }else if(array.length === i){

      str += `(a0)q${q} a0`;

    }else{

      str += ` ${array[i]} `;

    }

  }

  console.log(...str);
  console.log('----------------------------------------------------');
  endState(array, q);
  
}

const endState = (array, q) => {

  let str = "";
  let char = '';

  if(q === 3) {

    char = '-'

  }else{

    char = '+'

  }

  if(array.length !== 1) {

    for(let i = 0; i < array.length; i++) {

      if(i === 0) {
        
        str += `a0 ${array[i]} `;
  
      }else if(array.length - 1 === i){
  
        str += `(${array[i]})q${q} ${char} a0`;
  
      }else{
  
        str += ` ${array[i]} `;
  
      }
      
    }

  }else{

    str += `a0 (${array[0]})q${q} ${char} a0`;

  }

  console.log(...str);
  console.log('----------------------------------------------------');

}