import { create } from "zustand";
import {
  Employee,
  ProductionLine,
  ProductionStep,
  Robot,
  SimulationStatus,
  Station,
  Status,
  VehicleModel,
} from "@/types/types.ts";

interface SearchStore {
  query: string;
  setQuery: (query: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: "",
  setQuery: (query: string) => set({ query }),
}));

interface SelectedEntity {
  entity: Employee | ProductionLine | ProductionStep | Station | Robot;
  setEntity: (
    entity: Employee | ProductionLine | ProductionStep | Station | Robot,
  ) => void;
}

export const useEntityStore = create<SelectedEntity>((set) => ({
  entity: {} as Employee | ProductionLine | ProductionStep | Station | Robot,
  setEntity: (
    entity: Employee | ProductionLine | ProductionStep | Station | Robot,
  ) => set({ entity }),
}));

interface SelectedType {
  type: string;
  setType: (type: string) => void;
}

export const useTypeStore = create<SelectedType>((set) => ({
  type: "line",
  setType: (type: string) => set({ type }),
}));

export interface ProductionlineStore {
  productionLines: ProductionLine[];
  setProductionLines: (productionLines: ProductionLine[]) => void;
}

export const useProductionLinesStore = create<ProductionlineStore>((set) => ({
  productionLines: [] as ProductionLine[],
  setProductionLines: (productionLines: ProductionLine[]) =>
    set({ productionLines }),
}));

export interface RobotStore {
  robots: Robot[];
  setRobots: (robots: Robot[]) => void;
}

export const useRobotsStore = create<RobotStore>((set) => ({
  robots: [] as Robot[],
  setRobots: (robots: Robot[]) => set({ robots }),
}));

export interface StationStore {
  stations: Station[];
  setStations: (stations: Station[]) => void;
}

export const useStationsStore = create<StationStore>((set) => ({
  stations: [] as Station[],
  setStations: (stations: Station[]) => set({ stations }),
}));

export interface EmployeeStore {
  employees: Employee[];
  setEmployees: (employees: Employee[]) => void;
}

export const useEmployeeStore = create<EmployeeStore>((set) => ({
  employees: [] as Employee[],
  setEmployees: (employees: Employee[]) => set({ employees }),
}));

export interface ProductionStepStore {
  productionSteps: ProductionStep[];
  setProductionSteps: (productionSteps: ProductionStep[]) => void;
}

export const useProductionStepsStore = create<ProductionStepStore>((set) => ({
  productionSteps: [] as ProductionStep[],
  setProductionSteps: (productionSteps: ProductionStep[]) =>
    set({ productionSteps }),
}));

export interface currentEmployeeStore {
  currentEmployee: Employee;
  setCurrentEmployee: (currentEmployee: Employee) => void;
}

export const useCurrentEmployeeStore = create<currentEmployeeStore>((set) => ({
  currentEmployee: {
    name: "",
    uuid: "",
    station: undefined,
  },
  setCurrentEmployee: (currentEmployee: Employee) => set({ currentEmployee }),
}));

export interface currentStationStore {
  currentStation: Station;
  setCurrentStation: (currentStation: Station) => void;
}

export const useCurrentStationStore = create<currentStationStore>((set) => ({
  currentStation: {} as Station,
  setCurrentStation: (currentStation: Station) => set({ currentStation }),
}));

export interface currentRobotStore {
  currentRobot: Robot;
  setCurrentRobot: (currentRobot: Robot) => void;
}

export const useCurrentRobotStore = create<currentRobotStore>((set) => ({
  currentRobot: {
    productionLine: undefined,
    uuid: "",
    name: "",
    durationInMinutes: 0,
    failureProbability: 0,
    timeToRecovery: 0,
    maintenanceTimeInMinutes: 0,
    maintenanceCycleInMinutes: 0,
  },
  setCurrentRobot: (currentRobot: Robot) => set({ currentRobot }),
}));

export interface currentProductionLineStore {
  currentProductionLine: ProductionLine;
  setCurrentProductionLine: (currentProductionLine: ProductionLine) => void;
}

export const useCurrentProductionLineStore = create<currentProductionLineStore>(
  (set) => ({
    currentProductionLine: {
      name: "",
      status: Status.INCOMPLETE,
      productionSteps: [],
      simulationStatus: SimulationStatus.STOPPED,
      vehicleModel: VehicleModel.GOLF,
      uuid: "",
    },
    setCurrentProductionLine: (currentProductionLine: ProductionLine) =>
      set({ currentProductionLine }),
  }),
);

interface StatisticStore {
  comparableProductionLines: ProductionLine[];
  setComparableProductionLines: (
    comparableProductionLines: ProductionLine[],
  ) => void;
}

export const useStatisticStore = create<StatisticStore>((set) => ({
  comparableProductionLines: [] as ProductionLine[],
  setComparableProductionLines: (comparableProductionLines: ProductionLine[]) =>
    set({ comparableProductionLines }),
}));