export interface Vehicle {
    id: number
    year: number,
    make: string,
    model: string,
    type: string
}

export function getVehicles(): Vehicle[] {
    const vehicles = [
        {
            id: 0,
            year: 2008,
            make: "Yamaha",
            model: "FZ1",
            type: "motorcycle"
        },
        {
            id: 1,
            year: 2011,
            make: "Kawasaki",
            model: "Concours",
            type: "motorcycle"
        }
    ];
    return vehicles;
}