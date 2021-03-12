import React from "react";
import './style.css'

function Header(props) {


    return (
        <div className='information'>
            <h1 onClick={props.sortFirst} >
                First Name
            </h1>
            <h1 onClick={props.sortLast}>
                Last Name
            </h1>
            <h1>
                Gender
            </h1>
            <h1>
                DOB
            </h1>
        </div>
    )
}

export default Header;  