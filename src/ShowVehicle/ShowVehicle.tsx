import React, { Component } from "react";
import { Vehicle } from "../helpers";

interface Props {
    vehicle: Vehicle
}

export default class ShowVehicle extends Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return this.props.vehicle.make;
    }
}