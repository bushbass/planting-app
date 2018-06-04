import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { plants: [] };
  }

  componentDidMount() {
    fetch("/plants")
      .then(response => response.json())
      .then(plants => this.setState({ plants }));
  }

  render() {
    return (
      <div className="App">
        <h1>Plants</h1>
        {this.state.plants.map(plant => (
          <div key={plant._id}>
            {plant.plant_name} - {plant.plant_location}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
