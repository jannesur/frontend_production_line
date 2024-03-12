import axios from "axios";
import { Employee } from "@/types/types.cjs";

export function getAllEmployees() {
  return axios
    .get("localhost:8080/employees/all")
    .then((res) => res.data as Employee[]);
}

export function getAllEmployeesWithoutStation() {
  return axios
    .get("localhost:8080/employees/without-station")
    .then((res) => res.data as Employee[]);
}

export function getEmployeeById(id: string) {
  return axios
    .get(`localhost:8080/employees/${id}`)
    .then((res) => res.data as Employee);
}