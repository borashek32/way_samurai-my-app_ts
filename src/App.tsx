import React from 'react';
import Accordion from "./components/accordion/Accordion";
import Rating from "./components/rating/Rating";
import './App.css';


// function hello() {
//     debugger;
//     alert('hello');
// }
// the first letter isn't capitalized,
// so this is just a function, not a component. i
// t needs to be called like this hello()
// hello();

// function sum(a: number, b: number) {
//     alert (a + b);
// }
// sum(4, 5);
// sum(11, 6);

function App() {
    // something useful
    // debugger;
    // return js like html = jsx
    console.log("app rendering");
    return (
    <div className="App">
        <PageTitle title={"this is app component"}/>
        <PageTitle title={"my friends"}/>
        Article 1
        <Rating value={3}/>
        <Accordion titleValue={"Menu"} collapsed={true}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
        Article 2
        <Rating value={4}/>
        Article 0
        <Rating value={0}/>
        Article 1
        <Rating value={1}/>
        Article 2
        <Rating value={2}/>
        Article 3
        <Rating value={3}/>
        Article 4
        <Rating value={4}/>
        Article 5
        <Rating value={5}/>
    </div>
    );
}

type PageTitlePropType = {
    title: string
};

function PageTitle(props: PageTitlePropType) {
    // debugger;
    console.log("app title rendering");
    return (
        <div>
            <h1 className="App-header">{ props.title }</h1>
        </div>
    )
}

// one more variant to call a component
// const App = () => {
//   return (
//       <div className="App">
//
//       </div>
//   );
// }



export default App;
