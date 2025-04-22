// Joshua O. Pagcaliwagan CMSC 100 C-1L Exer9 JSReact Part 2
import React from 'react';
import { useState } from 'react';//hook for state management
import Header from './components/Header.jsx';
import Item from './components/Item.jsx';
import Cart from './components/Cart.jsx';
import './App.css';

//main app
function App() {
  //array of objects with name, url, id, image
  const items = [
    { name: 'Asahy Power Juicer', url: "#", id: 1, image: "./public/a.jpg" },
    { name: 'Samsong Washing Machine', url: "#", id: 2, image: './public/b.jpg' },
    { name: 'Hanabesh Electric Fan', url: "#", id: 3, image: './public/c.jpg' },
    { name: 'Appol Smartphone', url: "#", id: 4, image: './public/d.jpg' }
  ];

  //state variable cartItems set as empty array, setCartItems is function to update cartItems state
  const [cartItems, setCartItems] = useState([]);

  function add(item) {//function for adding to cart
    setCartItems(prev => {//previous state to not overwrite old cart data
      const found = prev.find(cartItem => cartItem.id == item.id);//see if item is already in cart using id
      if (found) {//if so, make new array by mapping over old cart
        //add qty by 1 for same item
        return prev.map(cartItem =>
          cartItem.id == item.id//if same
            ? { ...cartItem, qty: cartItem.qty + 1 } //add qty of item
            : cartItem //if not, no change
        );
      } else {
        //if item is not in cart, add it with qty set to 1
        return [...prev, { ...item, qty: 1 }];
      }
    });
  }

  //function to remove item from cart by id
  function del(id) {
    //filters out item with same id to delete, keeps other items unaffected
    setCartItems(prev => prev.filter(item => item.id !== id));
  }
  return (//return for visual layout
    //div as page wrapper with font and bg color
    <div style={{ fontFamily: 'Arial', backgroundColor: 'white' }}>
      <Header /> {/*render header*/}
      {/*flex container for items and cart, display, justify, align, gap, padding, bgcolor */}
      <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '20px', padding: '20px',backgroundColor: 'blue',
      }}>
        {/*nested flex container to render each item */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {/*loop over items array to make one item component for each product */}
          {items.map(item => (
            //render item component with id, name, image, and onAdd
            <Item key={item.id} name={item.name} image={item.image} onAdd={() => add(item)}
            />
          ))}
        </div>
        {/*pass current cart items and delete function as props*/}
        <Cart cartItems={cartItems} onDelete={del} />
      </div>
    </div>
  );
}
export default App;//export App
/*References:
https://medium.com/@ariefbadal21/learn-reactjs-with-me-array-find-dbbdeafe4633
https://www.w3schools.com/react/react_es6_spread.asp
https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
*/