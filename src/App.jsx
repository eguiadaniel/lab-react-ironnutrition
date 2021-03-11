import React from 'react';
import './App.scss';
import Meal from './Meal';
import SearchBar from './SearchBar';
import MealList from './MealList';
import AddMeal from './AddMeal';

import meals from './meals';

class App extends React.Component {
  state = {
    meals: meals,
    search: ''
  };

  addNewMeal = (meal) => {
    this.setState({
      meals: [meal, ...meals]
    });
  };

  updateMealOnSearch = (search) => {
    // const copyOfMeals = [...this.state.meals];
    const filteredMeals = this.state.meals.filter((meal) => { 
      return meal.title.toLowerCase().includes(search.toLowerCase())       
    });    

    this.setState({
      meals: filteredMeals,
      search: search
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>

        <SearchBar onSearchMeal={this.updateMealOnSearch} />
        
        {/* <button>Add New Meal</button> */}


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
