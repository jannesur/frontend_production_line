import { getAllEmployees } from "@/api/employee.ts";
import { getAllRobots } from "@/api/robot.ts";
import { getAllStations } from "@/api/station.ts";
import { getAllProductionLines } from "@/api/productionline.ts";
import {
  useEmployeeStore,
  useProductionLinesStore,
  useRobotsStore,
  useStationsStore,
} from "@/store.ts";
import { useMemo } from "react";

export function FetchData() {
  const employees = useEmployeeStore();
  const robots = useRobotsStore();
  const stations = useStationsStore();
  const productionLines = useProductionLinesStore();

  useMemo(() => {
    getAllEmployees()
      .then((employee) => {
        employees.setEmployees(employee);
      })
      .catch((error) => {
        console.log("Error fetching available employees." + error);
      });
    getAllRobots()
      .then((robot) => {
        robots.setRobots(robot);
      })
      .catch((error) => {
        console.log("Error fetching available robots." + error);
      });
    getAllStations()
      .then((station) => {
        stations.setStations(station);
      })
      .catch((error) => {
        console.log("Error fetching available stations." + error);
      });
    getAllProductionLines()
      // @ts-ignore
      .then((productionLine) => {
        productionLines.setProductionLines(productionLine);
      })
      .catch((error) => {
        console.log("Error fetching available production lines." + error);
      });
  }, []);
}