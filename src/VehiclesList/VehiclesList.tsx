import React, { Component } from "react";
import { Vehicle } from "../helpers";

interface Props {
    vehicles: Vehicle[],
    changeCurrentVehicle(newVehicle: Vehicle): void
}

export default class VehiclesList extends Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return this.props.vehicles.map((vehicle: Vehicle) => {
            return <button key={vehicle.id} className="vehicle-button" onClick={() => this.props.changeCurrentVehicle(vehicle)}>{vehicle.year} {vehicle.make} {vehicle.model}</button>
        });
    }
}