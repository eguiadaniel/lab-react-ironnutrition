import React from 'react';
import './App.scss';
import Meal from './Meal';
import MealList from './MealList';
import AddMeal from './AddMeal';

import meals from './meals';

class App extends React.Component {
  state = {
    meals: meals
  };

  addNewMeal = (meal) => {
    this.setState({
      meals: [meal, ...meals]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        {/* <button>Add New Meal</button> */}

        {/* <SearchBar name="searchBar" input={this.keyword} /> */}

        <AddMeal onAddNewMeal={this.addNewMeal} />

        <MealList meals={this.state.meals} />
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
