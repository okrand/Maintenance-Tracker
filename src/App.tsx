import React, { Component } from "react";
import "./App.css";
import VehiclesList from "./VehiclesList/VehiclesList";
import ShowVehicle from "./ShowVehicle/ShowVehicle";
import { Vehicle, getVehicles } from "./helpers";

interface State {
  currentVehicle: Vehicle,
  vehicles: Vehicle[],
}

class App extends Component<{}, State> {
    constructor(props: any) {
      super(props);

      const vehicles = getVehicles();
      this.state = {
        vehicles,
        currentVehicle: vehicles[0]
      };
    }
    
    changeCurrentVehicle = (newVehicle: Vehicle) => {
      this.setState({currentVehicle: newVehicle});
    }

    render() {
      return (
        <div className="App">
          <div className="App-header">Maintenance Tracker</div>
          <div className="App-content">
            <div className="current-vehicle">
              <ShowVehicle vehicle={this.state.currentVehicle}/>
            </div>
            <div className="right-column">
              <VehiclesList changeCurrentVehicle={this.changeCurrentVehicle} vehicles={this.state.vehicles}/>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
