import React from 'react';
import './App.scss';

class Meal extends React.Component {
  render() {
    const meal = this.props.meal;
    return (
      <div className="Meal">
        <img src={meal.image} alt={meal.title} />
        <div>
          <h5>{meal.title}</h5>
          <small>{meal.calories}</small>
        </div>
        <form>
          <input type="number" value="1" />
          <button>+</button>
        </form>
      </div>
    );
  }
}

export default Meal;

{
  /* {
    "name": "Pizza",
    "calories": 400,
    "image": "https://i.imgur.com/eTmWoAN.png",
    "quantity": 0
  }, */
}
