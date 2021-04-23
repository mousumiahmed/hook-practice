import React from 'react'
import PropTypes from 'prop-types'; 
import Button from './Button';

 function Header({title,onAdd,showaddvalue}) {

    const onClickAdd=(e)=>{
        console.log("click")
    }
    return (
        <header className='header'>
            {title}
            <Button 
            color={!showaddvalue ? 'red' : 'green'}
            text={!showaddvalue?"Add Task":"Close"} color="white" onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title:"TRACKER",
}

Header.propTypes = {
    title :PropTypes.string.isRequired
}

export default Header
