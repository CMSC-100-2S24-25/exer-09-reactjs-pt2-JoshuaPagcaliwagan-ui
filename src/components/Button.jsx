// Joshua O. Pagcaliwagan CMSC 100 C-1L Exer9 JSReact Part 2
function Button(props) {
    return (
        //button style with bgcolor, font color, padding, border
      <button style={{ backgroundColor: '#FF0080', color: 'white', padding: '8px 16px',borderRadius: '5px',}} 
        onClick={props.onClick}//onClick but does nothing
      > {/*show menu choices*/}
        {props.name}
      </button>
    );
}

export default Button;//export function
