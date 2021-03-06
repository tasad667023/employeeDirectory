import React from "react";

function Employee(props) {


    return (
        <>
            <li className="list-group-item row">
                <p className="col">{props.results.name.first}</p>
                <p className="col">{props.results.name.last}</p>
                <p className="col">{props.results.gender}</p>
                <p className="col">{props.results.dob.date}</p>
                </li>

        </>
    )
}

export default Employee;  