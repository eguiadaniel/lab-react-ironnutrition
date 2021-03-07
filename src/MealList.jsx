import React from 'react';
import './App.scss';
import meals from './meals';
import Meal from './Meal';

class MealList extends React.Component {
  render() {
    const newMeal = this.props.newMeal;
    const newList = [newMeal, ...meals];
    console.log(newMeal);
    return (
      <ul>
        {newList.map((meal) => {
          return (
            <Meal
              key={meal.title}
              title={meal.title}
              calories={meal.calories}
              quantity={meal.quantity}
              image={meal.image}
            />
          );
        })}
      </ul>
    );
  }
}

export default MealList;
