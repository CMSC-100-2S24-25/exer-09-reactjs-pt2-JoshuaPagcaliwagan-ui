//Joshua O. Pagcaliwagan CMSC 100 C-1L Exer9 JSReact Part 2
import React from 'react'
import Button from './Button.jsx'

function Header(){
    const menus = [//array of menus with name, url
        { name: 'Appliances', url:'#'},
        { name: 'Gadgets', url:'#'},
        { name: 'Accessories', url:'#'},
        ];

        return(//div style for header with flex, bgcolor, padding, justify
            <div style={{ display: 'flex', backgroundColor: '#FFA500', padding: '10px', justifyContent: 'space-between'}}>
                {/*div style for Lazado text with bold, padding, size, align*/}
                <div style={{ fontWeight: 'bold', paddingLeft: '20px', fontSize: '20px', textAlign: 'center'}}>Lazado: Araw-araw Kang Panalo!</div>
                {/*div style for menu choices with flex, gap, padding*/}
                <div style={{ display: 'flex', gap: '20px', paddingRight: '20px' }}>
                {/*map all menu choice*/}
                {menus.map(menu => <Button name={menu.name} />)}
                </div>
            </div>
        )
    }

export default Header//export function