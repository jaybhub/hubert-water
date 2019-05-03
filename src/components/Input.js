import React from 'react';


const Input = (props) => {
    return (  
  <div style={props.style} className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className="form-input"
      id={props.name}
      name={props.name}
      type={props.type}
      style={props.style}
      value={props.value}
      onChange={props.handleChange}
    />
  </div>
)
}

export default Input;