import React from 'react';
import './App.scss';
import Meal from './Meal';
import MealList from './MealList';
import AddMeal from './AddMeal'

import meals from './meals';

const SearchBar = ({ keyword }) => {
  return (
    <input
      key="random1"
      value={keyword}
      placeholder={'search Meal'}
      //  onChange={}
    />
  );
};

class App extends React.Component {
  state = {
    mealList: [],
    newMeal: '',
    name: '',
    calories: '',
    image: ''
  };

  
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        {/* <button>Add New Meal</button> */}

        {/* <SearchBar name="searchBar" input={this.keyword} /> */}

        <AddMeal />

        <MealList newMeal={this.state.newMeal} />
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
