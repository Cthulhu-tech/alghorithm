const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Array length: ', (answer) => {

    Main(Number(answer));
    rl.close();

});


const Main = (number) => {

    console.log(number)

}