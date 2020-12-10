import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_6Y4iBv2mgpVmnJeASeq5un4AAUKDhHE",
    authDomain: "expensify-af5ba.firebaseapp.com",
    databaseURL: "https://expensify-af5ba-default-rtdb.firebaseio.com",
    projectId: "expensify-af5ba",
    storageBucket: "expensify-af5ba.appspot.com",
    messagingSenderId: "944386851561",
    appId: "1:944386851561:web:bc1aa5b8d8dae43ac6e678",
    measurementId: "G-17L2SP9Q90"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default}; 



// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ... childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
   
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ... childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'blah blah',
//     amount: 5403.50,
//     createdAt: '12/5/2020'
// })

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// })

// database.ref('notes/-MOCyRQWUITIm89UnXMa').remove();

// const firebaseNotes = {
//     notes: {
//         asdaasd: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         asdasadsdsa: {
//             title: 'Another note!',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First Note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another Note!',
//     body: 'This is my note'
// }]

// database.ref().set(notes);


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//     console.log('Error with data fetching', error)
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error)
//     });

// database.ref().set({
//     name: 'Island Huynh',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     },
//     attributes: {
//         height: 62,
//         weight: 102
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company" : 'Amazon',
//     "location/city" : 'Seattle'
// });