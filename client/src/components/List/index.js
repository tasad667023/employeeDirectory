import React from "react";
import Employee from '../Employee'

function List(props) {


    return (

        <ul class="list-group">
            {
                props.results.map((employee) => {
                    return < Employee results={employee} />
                })
            }
        </ul>

    )
}

export default List;  