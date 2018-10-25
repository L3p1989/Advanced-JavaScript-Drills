name = 'Patrick';

var name;

console.log(name);

setName();

function setName() {
    var name = 'Patrick Hogan';
    console.log(name);
};

console.log('1st test')

let avg = findAvg(2, 2);

console.log('2nd test')

function findAvg(a, b) {
    console.log('3rd test');
    var answer = (a + b) / 2;
    return answer;
};//end of hoisting exercise

//beginning of scope exercise
let fruits = ['Peaches', 'apples', 'blueberries'];



function showFruits() {
    let favFruit = fruits[0];
    console.log(fruits[0]);
    showFav();
    function showFav() {
        console.log(favFruit)
    }
    let leastFav = fruits[1]

    console.log(leastFav)
};

showFruits();