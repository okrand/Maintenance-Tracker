import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Vehicle, getLog, getColumns } from "../helpers";

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
        const nextOilChange = "";
        const columns = getColumns();
        return (<div>
            <div className="vehicle-header"> 
                <div className="vehicle-name">{displayVehicleName} </div>
                <div className="vehicle-next-oil">{nextOilChange}</div>
            </div>
            <ReactTable className="vehicle-table" data={log} columns={columns} defaultPageSize = {10}/>
            </div>);
    }
}