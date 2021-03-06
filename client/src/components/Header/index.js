import React from "react";
import './style.css'

function Header() {


    return (
        <div className='information'>
            <h1 onClick={()=> console.log("works")} >
                First Name
            </h1>
            <h1>
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