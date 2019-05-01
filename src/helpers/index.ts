import { VendorLonghandPropertiesFallback } from "csstype";

export interface Vehicle {
    id: number
    year: number,
    make: string,
    model: string,
    type: string,
    oilChange: number,
    currentMileage: number
}

export function getVehicles(): Vehicle[] {
    const vehicles = [
        {
            id: 0,
            year: 2008,
            make: "Yamaha",
            model: "FZ1",
            type: "motorcycle",
            oilChange: 3000,
            currentMileage: 28875
        },
        {
            id: 1,
            year: 2011,
            make: "Kawasaki",
            model: "Concours",
            type: "motorcycle",
            oilChange: 3000,
            currentMileage: 33150
        }
    ];
    return vehicles;
}

interface Log {
    id: number,
    vehicleId: number,
    work: string,
    mileage: number,
    category: string,
    details: string
}

export function getLog(vehicleId: number): Log[] | undefined {
    if (vehicleId === 0){
        return [
            {
                id: 0,
                vehicleId: 0,
                work: "Oil Change w/ Filter",
                mileage: 28875,
                category: "Oil Change",
                details: "Mobil1 + HiFlo filter"
            }
        ];
    }
    return undefined;
}