import React from 'react';
import './App.scss';
import Meal from './Meal';
import MealList from './MealList';

import meals from './meals';

class AddMeal extends React.Component {
  state = {
    mealList: [],
    newMeal: '',
    title: '',
    calories: '',
    image: ''
  };

  handleFormSubmission = (event) => {
    event.preventDefault();

    this.setState({
      newMeal: {
        title: this.state.title,
        calories: this.state.calories,
        image: this.state.image
      }
    });
    console.log(this.state.newMeal);
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name] : value
    })
     

  };

  render() {
    return (
      <div className="AddMeal">
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="title-input">Meal title</label>
          <input
            id="title-input"
            name="title"
            type="text"
            placeholder="Meal title here"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
          <label htmlFor="number-input">Number of calories</label>
          <input
            id="number-input"
            name="calories"
            type="number"
            placeholder="Calories number here"
            onChange={this.handleInputChange}
            value={this.state.calories}
          />
          <label htmlFor="image-input">Image URL</label>
          <input
            id="image-input"
            name="image"
            type="text"
            placeholder="Image url"
            onChange={this.handleInputChange}
            value={this.state.image}
          />

          <button>Add Meal</button>
        </form>

        <hr/>

        <p>Title: {this.state.title}</p>
        <p>Calories: {this.state.calories}</p>
        <p>Image: {this.state.image}</p>
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
