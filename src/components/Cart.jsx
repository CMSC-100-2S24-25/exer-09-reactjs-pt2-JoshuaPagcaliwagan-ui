// Joshua O. Pagcaliwagan CMSC 100 C-1L Exer9 JSReact Part 2
import React from 'react'
function Cart(props) {
    return (
       //outer div for cart with width
      <div style={{ width: '200px' }}>
        {/*div style for cart total with bold, margin, color*/}
        <div style={{ fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>
            {/*show total qty, .reduce to add sum of all items qty*/}
          Shopping cart (Total: {props.cartItems.reduce((sum, item) => sum + item.qty, 0)})
        </div>

        {props.cartItems.map(item => (//loop through array of cart items and makes card for each one
            //div with key, bgcolor, margin, flex, justify, align, padding
          <div key={item.id} style={{backgroundColor: '#E0E0E0', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px'
          }}>
            {/*show item name*/}
            <div style={{ fontSize: '12px' }}>{item.name}</div>
            {/*flex container for qty and delete button with align and gap*/}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {/*show item qty*/}
              <div style={{ fontSize: '12px' }}>QTY: {item.qty}</div>
              {/*delete button, calls rem, bgcolor, font color */}
              <button 
                onClick={() => props.onDelete(item.id)} 
                style={{ backgroundColor: '#FF00BF', color: 'white', }}>X
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}
export default Cart;//export function
//References: https://www.w3schools.com/jsref/jsref_reduce.asp