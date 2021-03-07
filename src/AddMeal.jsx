import React from 'react';
import './App.scss';
import Meal from './Meal';
import MealList from './MealList';

import meals from './meals';

class AddMeal extends React.Component {
  state = {
    mealList: [],
    newMeal: '',
    name: '',
    calories: '',
    image: ''
  };

  handleFormSubmission = (event) => {
    event.preventDefault();

    this.setState({
      newMeal: {
        name: this.state.name,
        calories: this.state.calories,
        image: this.state.image
      }
    });
    console.log(this.state.newMeal);
  };

  handleNewMealChange = (event) => {
    // const name = event.target.name;

    if (event.target.name === 'name') {
      const name = event.target.value;
      this.setState({
        name: name
      });
    }

    if (event.target.name === 'calories') {
      const calories = event.target.value;
      this.setState({
        calories: calories
      });
    }

    if (event.target.name === 'image') {
      const image = event.target.value;
      this.setState({
        image: image
      });
    }

    // console.log(event.target.name);
    // console.log(this.state.name);
    // console.log(this.state);
  };

  render() {
    return (
      <div className="AddMeal">
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="name-input">Meal name</label>
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="Meal name here"
            onChange={this.handleNewMealChange}
            value={this.state.name}
          />
          <label htmlFor="number-input">Number of calories</label>
          <input
            id="number-input"
            name="calories"
            type="number"
            placeholder="Calories number here"
            onChange={this.handleNewMealChange}
            value={this.state.calories}
          />
          <label htmlFor="image-input">Image URL</label>
          <input
            id="image-input"
            name="image"
            type="text"
            placeholder="Image url"
            onChange={this.handleNewMealChange}
            value={this.state.image}
          />

          <button>Add Meal</button>
        </form>
      </div>
    );
  }
}

export default AddMeal;

// <ul>
//           {this.state.tasks.map(task => (
//             <TaskItem
//               key={task.id}
//               task={task}
//               onRemoveTask={() => this.removeTask(task.id)}
//             />
//           ))}
//         </ul>
