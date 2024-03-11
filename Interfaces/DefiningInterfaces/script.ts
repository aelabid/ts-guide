interface Vehicle {
  make: string;
  model: string;
  year?: Date;
}

function createVehicle(vehicle: Vehicle): Vehicle {
    return vehicle;
};
