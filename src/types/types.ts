export type ProductionLine = {
  uuid: string;
  name: string;
  status: Status;
  simulationStatus: SimulationStatus;
  vehicleModel: VehicleModel;
  productionSteps: Station[] | Robot[];
  producedCars?: number;
};

export enum SimulationStatus {
  RUNNING,
  STOPPED,
}

export enum Status {
  READY,
  INCOMPLETE,
}

export enum VehicleModel {
  GOLF,
  POLO,
  ID3,
  ID4,
  ID7,
  TOTAL,
}

export interface ProductionStep {
  uuid: string;
  name: string;
  durationInMinutes: number;
  failureProbability: number;
  timeToRecovery: number;
  productionLine?: ProductionLine;
}

export type Station = {
  name: string;
  employees: Employee[];
} & ProductionStep;

export type Employee = {
  uuid: string;
  name: string;
  station?: Station;
};

export type Robot = {
  maintenanceCycleInMinutes: number;
  maintenanceTimeInMinutes: number;
} & ProductionStep;

export type Production = {
  uuid: string;
  productionLine: ProductionLine;
  productionSteps: ProductionStep[];
  productionLineUuid: string;
  productionLineName: string;
  vehicleModel: VehicleModel;
  startTime: Date;
  endTime: Date;
  numberProducedCars: number;
  productionTimes: ProductionTime[];
  currentProductionStep: ProductionStep;
};

export type ProductionTime = {
  uuid: string;
  productionTimeType: ProductionTimeType;
  durationInMinutes: number;
  production: Production;
};

export enum ProductionTimeType {
  PRODUCTION,
  FAILURE,
  MAINTENANCE,
}