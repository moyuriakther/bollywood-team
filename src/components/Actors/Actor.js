import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Actor = (props) => {
  const { name, age, salary, gender, picture } = props.actor;
  const userStyle = {
    border: "1px solid yellowGreen",
    margin: "10px",
  }
  const imgStyle ={
    height: "120px",
  }
  const handleAddUser = props.handleAddUser;
  return (
    <div className="grid-item" style={userStyle}>
      <img src={picture} alt="" style={imgStyle} />
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Salary:</strong> ${salary}</p>
      <button  onClick={() => handleAddUser(props.actor)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Card</button>
    </div>
  );
};

export default Actor;
