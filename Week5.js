//alert('hello');

// for (initializer; condition; increment)
const students = ['Emily', 'Rory', 'Octopus'];

for(let i=0; i <students.length; i++){
    console.log('Hello ' + students[i]);
}


let sum = 0;
for(let i = 0; i < 100; i+=20){
    sum = sum + i;
}
console.log(sum);

//function nameOfFunction(parameter, parameter){
    //code/logic
//}
//Call function

function product(a, b){
    x = a*b;
    console.log(x);
}
product(2, 3);

function sayHi(){
    console.log('Hi');
}
sayHi();

function add(value1, value2){

    sum = value1 + value2
    console.log(sum);
}

//const times = multiply(10, 20);
//console.log(times);

//function myname(){
    //let name = promt('what is your name?');
   // console.log(name);
//}
//myname();

function movie(title, released){
    return title + ' was released on ' + released;
}
var movie1 = movie('Avengers', '2019');
console.log(movie1);

//WEEK 6

var person = {
    name: 'Emily',
    age: '300',
    eyeColour: 'hazel',
    friends: ['Rory', 'Octopus', 'Dinosaur'],
    sayHello: function() {
        console.log('Hello');
    }
};
console.log('Name is ', person.name);
console.log('Friends are ', person.friends);
console.log('Favourite is ', person.friends[0]);
person.sayHello();

var jsHeader = document.getElementById('jsHeader');
jsHeader.addEventListener('click', function(){
    jsHeader.style.color = 'red'
});
//document.addEventListener('DOMContentLoaded', function(){
    //alert('Hi welcome')
//});

var div = document.getElementById('div');
var words = document.createElement('p');
words.innerText = 'Hiya';
div.append(words);



