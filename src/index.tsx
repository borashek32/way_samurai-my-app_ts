import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// let a = {
//     name: "nat",
//     age: 34,
//     address: {
//         country: "Turkey",
//         city: "Alanya"
//     }
// };
// console.log(a);

// let users = [
//     {
//         name: "nat",
//         age: 34,
//         address: {
//             country: "Turkey",
//             city: "Alanya"
//         }
//     },
//     {
//         name: "polina",
//         age: 8,
//         address: {
//             country: "Turkey",
//             city: "Alanya"
//         }
//     },
//     {
//         name: "igor",
//         age: 5,
//         address: {
//             country: "Turkey",
//             city: "Alanya"
//         }
//     },
//     {
//         name: "vadim",
//         age: 37,
//         address: {
//             country: "Turkey",
//             city: "Alanya"
//         }
//     }
// ];
// console.log(users[0].address.country);

// let b: boolean = true;
// let b = true;
// b = 10;
// b = "nat";
// b = true;
// console.log(b);

// let a: any; // говнокод
// let a;
// let a: Array<number>; // задаем пустой массив чисел, в массиве могут быть строки и числа <string | number>
// a = [1, 2, 3, 4, 5];
// a = [];
// a = [4, 6, 7];
// a = ["hello", "no"]; // нельзя
// console.log(a);