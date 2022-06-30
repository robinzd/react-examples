import React,{ useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./pages/layout";
import Home from './pages/home';
import Blog from './pages/blog';




// to show the realtime time in the browser//

// function showcurrenttime() {
//   const element =
//     (
//       <div>
//         <h1>Current Time {new Date().toLocaleTimeString()}</h1>
//         <h2>something the bigger</h2>
//       </div>

//     );
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     element,
//   );

// }

// setInterval(showcurrenttime,1000)

// to show the realtime time in the browser//

// passing the props to the app.js//
// const name="Robin";
// const bill="Divya";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App names={name} bills={bill}/>
//   </React.StrictMode>
// );
// passing the props to the app.js//

// passing alert messages//
// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <Football />


// );
// passing alert messages//

// passing arguments in alert messages//
// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   }

//   return (
//     <button onClick={() => shoot("Goal!")}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <Football />


// );
// passing arguments in alert messages//

// event in the alert messages//
// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);
//     /*
//     'b' represents the React event that triggered the function.
//     In this case, the 'click' event
//     */
//   }


//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <Football />

// );
// event in the alert messages//

// props can activate in the same page//
// if else condition//

// function MissedGoal() {
// 	return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
// 	return <h1>GOAL!</h1>;
// }

// function Goal(props)
// {
//   const isGoal = props.isGoal;
//   console.log(props.isGoal);
//   if (isGoal > 1) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(

//   <Goal isGoal={1} />
// );
// props can activate in the same page//
// if else condition//

// The props passing another maethod//

// function Carparking(props) {
//   const cars = props.car;

//   return (
//     <>
//       <h1>carparking</h1>


//       <h2>You parked {cars.length} cars in your car parking</h2>


//     </>
//   );

// }

// const cars = ['benz', 'audi'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Carparking car={cars} />
// );

// The props passing another maethod//

// list in react//
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi', 'benz'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

function Fruits(props) {
  return <li>i am a {props.carts}</li>;
}

function Cart() {
  const carts = ['apple', 'mango', 'grapes'];
  return (
    <>
      <h1>Here Are The Fruits</h1>
      <ul>
        {carts.map((veg) => <Fruits carts={veg} />)}
      </ul>
    </>
  );
}

function Bikes(props) {
  return <li>I am {props.brand} </li>
}


function Bikenames() {
  const biker = [
    {
      id: '1',
      brand: 'bajaj'
    },
    {
      id: '2',
      brand: 'yamaha'
    }
  ]
  return (
    <>
      <h1>Here The Bikes Names</h1>
      <ul>
        {biker.map((twowheller) => <Bikes brand={twowheller.brand} />)}
      </ul>
    </>
  )
}

function Myform() {
  return (
    <>
      <h1>My Form</h1>
      <form>
        <label>Enter Your Name:
          <input type="text" />
        </label>
      </form>
    </>
  )
}

// forms in react //

function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <>
      <h1>
        This Is My Form
      </h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}

          />
        </label>
        <label>Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}

          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}


function Form1() {
  const [textarea, setTextarea] = useState(
    "I Am Robin"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <>
      <h1>This Is My TextArea</h1>
      <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
    </>
  )
}

function Form2() {
  const [vegetables, setvegetables] = useState("Carrot");

  const handleChange = (event) => {
    setvegetables(event.target.value)
  }

  return (
    <>
      <h1>Here Are The Options</h1>
      <select value={vegetables} onChange={handleChange}>
        <option value="carrot">Carrot</option>
        <option value="tomato">Tomato</option>
        <option value="ladiesfinger">Ladiesfinger</option>
      </select>
    </>

  )
}

// forms in react //




// redirecting to the another page //
function Redirecting() {
  return (
    <>
      <h1>My Links</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// redirecting to the another page //

//increment and decrement in react//
const App1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) =>c - 1);
  };

  return (
    <>
      <h1>Quantity</h1>
      <div>
        <button onClick={increment}>+</button>
        Quantity:{count}
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
//increment and decrement in react//

// hooks in react//
function Favorite(){
  const [bike,setbike] = useState("R15");

  return(
    <>
    <h1>My favorite Bike is {bike}!</h1>
    <button
      type="button"
       onClick={() =>setbike("Royal Enfield")}
    >Royal Enfield</button>
    <button
      type="button"
       onClick={() => setbike("R15")}
    >R15</button>
    <button
      type="button"
       onClick={() => setbike("Pulsar 220")}
    >Pulsar 220</button>
    </>
  );
}


// hooks in react//

//usestate in react//
function Favoritebike(){
  const [brand,setbrand] =useState("Yamaha");
  const [name,setname] =useState("RX100");
  const [year,setyear] =useState("1983");
  const [color,setcolor] =useState("Red");
  return(
<>
<h1>My Bike is {name}</h1>
<p>It is Launch In the year{year} it's color is {color} bike brand is {brand} </p>
</>
  );
}

function Cars() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue"}
    });
  }

  const updateColors = () => {
    setCar(previousState => {
      return { ...previousState, color: "voilet"}
    });
  }
  const updatename = () => {
    setCar(previousState => {
      return { ...previousState, model: "Lambhorgini"}
    });
  }

return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
       <button
        type="button"
        onClick={updateColors}
      >Voilet</button>
      <button
        type="button"
        onClick={updatename}
      >Lambhorgini</button>
    </>
  )
}
//usestate in react//


// useeffect//
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    },2000);
  });



  return <h1>I have rendered {count} times!</h1>;
        
}

// useeffect//


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div>
    <Garage />
    <Cart />
    <Bikenames />
    <Myform />
    <Form />
    <Form1 />
    <Form2 />
    < Redirecting />
    <App1 />
    <Favorite />
    <Favoritebike/>
    <Cars />
    <Timer />
    </div>
  </>
);




// list in react//


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
