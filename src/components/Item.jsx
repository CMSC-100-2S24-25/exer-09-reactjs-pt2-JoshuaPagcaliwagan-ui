// Joshua O. Pagcaliwagan CMSC 100 C-1L Exer9 JSReact Part 2
import React from 'react'
function Item(props) {
    return (
        //div with width, bgcolor, padding, textAlign
      <div style={{ width: '150px', backgroundColor: '#FFC0CB', padding: '10px', textAlign: 'center' }}>
        {/*inner div for image with height and margin*/}
        <div style={{ height: '100px', marginBottom: '10px' }}>
          {/*get img src, style with width, height, fit*/}
          <img src={props.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        <button 
          onClick={props.onAdd}//call onAdd on click
          //style with bgcolor, font color, padding
          style={{ backgroundColor: '#FF00BF', color: 'white', padding: '10px' }}>
          Add to cart
        </button>
      </div>
    );
}

export default Item;//export function
