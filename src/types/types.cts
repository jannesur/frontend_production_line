export type ProductionLine = {
    uuid: string;
    name: string;
    stations: Station[];
    simulationStatus: SimulationStatus;
    vehicleModel: VehicleModel;
    robots: Robot[];
    productionSteps: ProductionStep[];
}

export enum SimulationStatus {

}

export enum VehicleModel {

}

export type ProductionStep = {
    uuid: string;
    name: string;
    durationInMinutes: number;
    failureProbability: number;
    timeToRecovery: number;
    productionLine: ProductionLine;
}

export type Station = {
    employees: Employee[];
}

export type Employee = {
    uuid: string;
    name: string;
}

export type Robot = {
    maintenanceCycle: number;
    maintenanceTime: number;
}