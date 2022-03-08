import React, { useState } from 'react'
import './Button.css'


function Button(props) {

    let btn = 'btn-comprar '
    btn += props.card ? 'btn-add-card' : ''
    btn += props.suporte ? 'btn-suport' : ''
    btn += props.delete ? 'btn-delete' : ''
    

    return (
      <>
        <li>
            <button className={btn}>Button</button>
        </li>
      </>
    )
}

export default Button