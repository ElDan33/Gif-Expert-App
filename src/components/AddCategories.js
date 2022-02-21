import React, { useState } from 'react'
import PropTypes from "prop-types";


const AddCategories = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submit Hecho: ${inputValue}`);
        setCategories( cat => [inputValue, ...cat]);
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}/>
    
        </form>
    )
}

AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategories
