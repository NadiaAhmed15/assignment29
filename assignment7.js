console.log('JS file is loaded'); 
// 1) Given the array const colors = ['red', 'green', 'blue'],
// use destructuring to assign the first, second, and third elements to variables named firstColor, secondColor, and thirdColor.


const colors =['red','green','blue'];
const [firstColor,secondColor,thirdColor] = colors ;
console.log(`First Color: ${firstColor}`);
console.log(`Second Color: ${secondColor}`);
console.log(`Third  Color: ${thirdColor}`);

// 2)Given the object const
// person = { name: 'Alice', age: 25, city: 'Wonderland' }, use destructuring to assign the properties name, age, and city to variables.
const person={name :'Alice',age:25, city:'Wonderland'};
const{name,age,city}=person;
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);

//3) Given the object const settings = { theme: 'dark', language: 'en' }, 
//use destructuring to assign the properties to variables, and provide a default value of 'light' for the property mode.
const settings = { theme: 'dark', language: 'en' };
const { theme, language, mode = 'light' } = settings; // Assigning default value 'light' to mode

console.log(`Theme: ${theme}`);
console.log(`Language: ${language}`);
console.log(`Mode: ${mode}`); 

