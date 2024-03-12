export type ProductionLine = {
    uuid: string;
    name: string;
    status: Status;
    simulationStatus: SimulationStatus;
    vehicleModel: VehicleModel;
    productionSteps: ProductionStep[];
}

export enum SimulationStatus {
    RUNNING,
    STOPPED
}

export enum Status {
    READY,
    INCOMPLETE
}

export enum VehicleModel {
    GOLF,
    POLO,
    ID3,
    ID4,
    ID7
}

export interface ProductionStep {
    uuid: string;
    name: string;
    durationInMinutes: number;
    failureProbability: number;
    timeToRecovery: number;
    productionLine: ProductionLine;
}

export type Station = {
    name: string;
    employees: Employee[];
} & ProductionStep;

export type Employee = {
    uuid: string;
    name: string;
    station: Station;
}

export type Robot = {
    maintenanceCycle: number;
    maintenanceTime: number;
} & ProductionStep;