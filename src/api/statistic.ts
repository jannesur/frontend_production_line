import { VehicleModel } from "@/types/types.ts";
import axios from "axios";

export async function getProducedCarsOfVehicleType(vehicleModel: VehicleModel) {
  return axios
    .get(
      "http://localhost:8080/production/carsFromOneVehicleModel/" +
        vehicleModel,
    )
    .then((res) => res.data as number);
}

export async function getNumberOfProducedCars() {
  return axios
    .get("http://localhost:8080/production/allCars")
    .then((res) => res.data as number);
}

export async function getNumberOfProducedCarsByProductionLine(uuid: string) {
  return axios
    .get("http://localhost:8080/production/carsFromOneProductionLine/" + uuid)
    .then((res) => res.data as number);
}

export async function getAllProducedCarsFromOneProductionLineForOneVehicleModel(
  uuid: string,
  vehicleModel: VehicleModel,
) {
  return axios
    .get(
      "http://localhost:8080/production/carsFromOneProductionLineAndOneVehicleModel/" +
        uuid +
        "/" +
        vehicleModel,
    )
    .then((res) => res.data as number);
}