//
// Object destructuring
//

// const person = {
//     name: 'Island',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: firstname = 'Anon', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstname} is ${age}.`)

// // renames temp to temperature
// const {city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holidy',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'self-publish'} = book.publisher;

// console.log(publisherName); // Penguin, self-publish

// 
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvannia', '19147'];

// skip the first variable by removing the first thing on the array

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemforsale, , mediumCost, ] = item;

console.log(`A ${itemforsale} costs ${mediumCost}.`);