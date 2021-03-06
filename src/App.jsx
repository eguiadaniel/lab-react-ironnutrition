import React, { Component } from 'react';
import './App.scss';
import Meal from './Meal';

import meals from './meals';

const mealsList = meals.map((meal) => {});

class App extends Component {
  render() {
    return (
      <div>
        <p>Sample App</p>
        <ul>
          {meals.map((meal) => {
            return (
              <Meal
                name={meal.name}
                calories={meal.calories}
                quantity={meal.quantity}
                image={meal.image}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

// <ul>
//           {this.state.tasks.map(task => (
//             <TaskItem
//               key={task.id}
//               task={task}
//               onRemoveTask={() => this.removeTask(task.id)}
//             />
//           ))}
//         </ul>
