import {
  EmployeeStore,
  RobotStore,
  StationStore,
  useEmployeeStore,
  useProductionLinesStore,
  useRobotsStore,
  useSearchStore,
  useStationsStore,
  useTypeStore,
} from "@/store.ts";
import { Employee, Robot, Station } from "@/types/types";

export function filterAll() {
  const query = useSearchStore((state) => state.query);
  const typeStore = useTypeStore((state) => state.type);
  const employees: EmployeeStore = useEmployeeStore();
  const stations: StationStore = useStationsStore();
  const robots: RobotStore = useRobotsStore();
  const productionLines = useProductionLinesStore();
  const queryResult: (Station | Robot | Employee)[] = [];
  if (typeStore === "employee") {
    employees.employees.forEach((employee) => {
      if (employee.name.toLowerCase().includes(query.toLowerCase())) {
        queryResult.push(employee);
      }
    });
  } else if (typeStore === "station") {
    stations.stations.forEach((station) => {
      if (station.name.toLowerCase().includes(query.toLowerCase())) {
        queryResult.push(station);
      }
    });
  } else if (typeStore === "line") {
    productionLines.productionLines.forEach((productionLine) => {
      if (productionLine.name.toLowerCase().includes(query.toLowerCase())) {
        queryResult.push(productionLine);
      } else if (
        productionLine.productionSteps.length.toLocaleString() ===
        query.toLowerCase()
      ) {
        queryResult.push(productionLine);
      } else if (
        productionLine.vehicleModel.toLocaleString().toLowerCase() ===
        query.toLowerCase()
      ) {
        queryResult.push(productionLine);
      } else if (
        productionLine.status
          .toLocaleString()
          .toLowerCase()
          .includes(query.toLowerCase())
      ) {
        queryResult.push(productionLine);
      }
    });
  } else if (typeStore === "robot") {
    robots.robots.forEach((robot) => {
      if (robot.name.toLowerCase().includes(query.toLowerCase())) {
        queryResult.push(robot);
      } else if (
        robot.timeToRecovery
          .toLocaleString()
          .toLowerCase()
          .includes(query.toLowerCase())
      ) {
        queryResult.push(robot);
      } else if (
        query
          .toLowerCase()
          .includes(robot.failureProbability.toLocaleString().toLowerCase())
      ) {
        queryResult.push(robot);
      } else if (
        query
          .toLowerCase()
          .includes(robot.durationInMinutes.toLocaleString().toLowerCase())
      ) {
        queryResult.push(robot);
      }
    });
  }
  return queryResult;
}