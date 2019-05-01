import React, { Component } from "react";
import { Vehicle, getLog } from "../helpers";

interface Props {
    vehicle: Vehicle
}

export default class ShowVehicle extends Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const displayVehicleName = `${this.props.vehicle.year} ${this.props.vehicle.make} ${this.props.vehicle.model}`;
        const log = getLog(this.props.vehicle.id);
        const displayLogs = log && log.map((l) => {
            return <p key={l.id}>{l.work}, {l.mileage}</p>
        });
        return (<div>
            <div className="vehicle-name"> {displayVehicleName} </div>
            <div className="next-oil"></div>
            <div className="logs">{displayLogs}</div>
            </div>);
    }
}