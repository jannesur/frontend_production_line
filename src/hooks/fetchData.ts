import { getAllProductionLines } from "@/api/productionline.ts";
import {
  useEmployeeStore,
  useProductionLinesStore,
  useRobotsStore,
  useStationsStore,
} from "@/store.ts";
import { useEffect } from "react";
import {
  Employee,
  Robot,
  SimulationStatus,
  Station,
  Status,
  VehicleModel,
} from "@/types/types.ts";
import { toast } from "sonner";
import { getAllEmployeesWithoutStation } from "@/api/employee.ts";
import { getRobotWithoutProductionLine } from "@/api/robot.ts";
import { getAllStationsWithoutProductionLine } from "@/api/station.ts";

export function FetchData() {
  const employeeState = useEmployeeStore();
  const robotState = useRobotsStore();
  const stationState = useStationsStore();
  const productionLines = useProductionLinesStore();

  useEffect(() => {
    const employees = [] as Employee[];
    const robots = [] as Robot[];
    const stations = [] as Station[];
    getAllEmployeesWithoutStation()
      .then((employee) => {
        employees.push(...employee);
      })
      .catch((error) => {
        toast("Error fetching available employees." + error);
      });
    getRobotWithoutProductionLine()
      .then((robot) => {
        robots.push(...robot);
      })
      .catch((error) => {
        toast("Error fetching available robots." + error);
      });
    getAllStationsWithoutProductionLine().then((station) => {
      stations.push(...station);
    });
    getAllProductionLines()
      .then((productionLine) => {
        productionLines.setProductionLines(productionLine);
        productionLine.forEach((productionLine) => {
          productionLine.productionSteps.forEach((productionStep) => {
            if ("employees" in productionStep) {
              let station = productionStep as Station;
              station = {
                ...station,
                productionLine: {
                  name: productionLine.name,
                  producedCars: productionLine.producedCars,
                  productionSteps: [],
                  simulationStatus: SimulationStatus.STOPPED,
                  status: Status.INCOMPLETE,
                  uuid: productionLine.uuid,
                  vehicleModel: VehicleModel.GOLF,
                },
              };
              stations.push(station);
              station.employees.forEach((e) => {
                station = { ...station, employees: [] };
                e = { ...e, station: station };
                employees.push(e);
              });
            } else if ("maintenanceCycleInMinutes" in productionStep) {
              const robot = productionStep as Robot;
              robot.productionLine = productionLine;
              robots.push(robot);
            }
          });
        });
        employeeState.setEmployees(employees);
        robotState.setRobots(robots);
        stationState.setStations(stations);
      })
      .catch((error) => {
        toast("Error fetching available production lines." + error);
      });
  }, []);
}