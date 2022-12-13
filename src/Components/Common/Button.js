import React from "react";
import './Button.css';

const Button = (props) => {
    return(
        <div>
            <button type="submit">{props.text}</button>
        </div>
    );
}

export default Button;