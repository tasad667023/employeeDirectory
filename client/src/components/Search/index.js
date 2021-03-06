import React from "react";


function Search({handleInputChange, handleSubmit}) {
    return (

        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
            <input type="text" onChange={handleInputChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
            </input>
            <button type="button" onClick={handleSubmit} className="btn btn-dark">Submit</button>
        </div>

    )
}

export default Search;  