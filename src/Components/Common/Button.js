import React from "react";
import './Button.css';

const Button = (props) => {
    return(
        <>
            <button type="submit">{props.text}</button>
        </>
    );
}

export default Button;