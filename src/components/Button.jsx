import React from 'react'
import PropTypes from 'prop-types'; 

 function Button({text,color,onClick}) {
     
    return (
        <div style={{backgroundColor:color}}>
            <button className="btn" onClick={onClick}>{text}</button>
        </div>
    )
}

Button.defaultProps={
    color:'steelblue'
}
Button.propType={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func.isRequired
}
export default Button