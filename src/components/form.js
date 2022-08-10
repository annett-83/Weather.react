import React from "react";

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="City"/>
        <button>chek your weather</button>
    </form>
)

export default Form;