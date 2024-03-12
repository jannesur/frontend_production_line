import { createLazyFileRoute } from "@tanstack/react-router";
import { SelectType } from "@/components/select-type.tsx";
import { useTypeStore } from "@/store.ts";
import { createStation } from "@/components/create-station.tsx";
import { useEffect, useState } from "react";
import { Employee } from "@/types/types.cjs";
import { getAllEmployeesWithoutStation } from "@/api/employee.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Table } from "@/components/ui/table.tsx";
import { Input } from "@/components/ui/input.tsx";

export const Route = createLazyFileRoute("/create")({
  component: Create,
});

function Create() {
  const selectedType = useTypeStore((state) => state.type);
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getAllEmployeesWithoutStation()
      .then((employees) => {
        setEmployees(employees);
      })
      .catch(() => {
        console.log("Error fetching available employees.");
      });
  }, []);
  console.log(selectedType);
  return (
    <>
      <SelectType />
      {selectedType === "station" ? createStation(employees) : <> </>}
      {selectedType === "line" ? createProductionLine() : <> </>}
      {selectedType === "employee" ? createEmployee() : <> </>}
      {selectedType === "robot" ? createRobot() : <> </>}
    </>
  );
}

function createProductionLine() {
  return (
    <>
      <div>
        <div className={"flex justify-center pt-10 gap-4"}>
          <Badge className={"text-white"}>Production Line name</Badge>
          <Input
            placeholder={"Production Line name"}
            required
            className={"w-1/2"}
          />
        </div>
        <div className={"flex justify-center pt-10 gap-4 px-4"}>
          <Badge className={"text-white"}>Stations</Badge>
          <Table>
            <thead>
              <tr>
                <th>
                  <Badge className={"text-white"}>Station ID</Badge>
                </th>
                <th>
                  <Badge className={"text-white"}>Station Name</Badge>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Station 1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Station 2</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

function createEmployee() {
  return (
    <>
      <div></div>
    </>
  );
}

function createRobot() {
  return (
    <>
      <div></div>
    </>
  );
}