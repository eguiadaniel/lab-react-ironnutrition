import React from 'react';
import './App.scss';

const Meal = (props) => {
  return (
    <div className="Meal">
      <img src={props.image} alt={props.title} />
      <div>
        <h5>{props.title}</h5>
        <small>{props.calories}</small>
      </div>
      <form>
        <input type="text" />
        <button>+</button>
      </form>
    </div>
  );
};

export default Meal;

{
  /* {
    "name": "Pizza",
    "calories": 400,
    "image": "https://i.imgur.com/eTmWoAN.png",
    "quantity": 0
  }, */
}
