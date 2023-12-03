import React from 'react'
import "./index.scss"

function Button({children,data}) {
    return (
        <button className='btn_one' style={data && {fontSize:data.fontsize, width:data.width, padding:data.padding, height:data.height}}>{children}</button>
    )
}

export default Button