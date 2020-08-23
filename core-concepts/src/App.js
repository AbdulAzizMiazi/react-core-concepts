import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';


const products = [
  {name: "Photo Shope", price: 99.99},
  {name: "Illustator", price: 40.79},
  {name: "PDF Reader", price: 9.99}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Parson name="Aziz" prof="Full-Time Student"></Parson>
        <Parson name="Tuhin" prof="Part-Time Teaching"></Parson>
        <Parson name="Siam" prof="Full-Time Mastikhor"></Parson>
        <Parson name="Sahfi" prof="Full-Time Vodro Pola"></Parson>
        {/* <Sells PName={products[0].name} PPrice={products[0].price}></Sells> */}
        {/* <Sells product={products[0]}></Sells>
        <Sells product={products[1]}></Sells>
        <Sells product={products[2]}></Sells> */}
        {
          products.map(pds=> <Sells product={pds}></Sells>)
        }
      </header>
    </div>
  );
}



function Parson(props){
  const PersonStyle={
    border: '2px solid red',
    borderRadios: '5px',
    padding: '20px',
    margin: '15px 40px',
    width: '300px'
  }
  return(
    <div style={PersonStyle}>
      <h1>Name: {props.name}</h1>
      <p>Profession: {props.prof}</p>
    </div>
  )
}


function Sells(props){
  const sellsStyle= {
    fontSize: '22px',
    color: 'black',
    backgroundColor: 'lightGrey',
    width: '300px',
    height: '200px',
    margin: '20px 30px',
    border: '5px solid black',
    borderRadius: '5px',
    padding: '0px'
  }
  const {name, price} = props.product; 
  return(
    <div style={sellsStyle}>
      <h2>{name}</h2>
      <h4>${price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(){

  const [count, setCount] = useState(0);
  // const stat = ()=>{
  //   // const increase = count + 1;
  //   // setCount(increase);
  //   setCount(count + 1)
  // }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count +1 )}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </div>
  )
}

export default App;
