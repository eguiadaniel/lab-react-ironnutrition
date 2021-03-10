import React from 'react';
import './App.scss';
import Meal from './Meal';

class MealList extends React.Component {

  
  render() {

    const meals = this.props.meals;

    return (
      <ul>
        {meals.map((meal) => {
          return (
            <Meal meal={meal}
            />
          );
        })}
      </ul>
    );
  }
}

export default MealList;
