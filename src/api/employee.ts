import axios from "axios";
import { Employee } from "@/types/types.ts";

export async function getAllEmployees() {
  return await axios
    .get("http://localhost:8080/employees")
    .then((res) => res.data as Employee[]);
}

export async function getAllEmployeesWithoutStation() {
  return await axios
    .get("http://localhost:8080/employees/without-station")
    .then((res) => res.data as Employee[]);
}

export async function getEmployeeById(id: string) {
  return await axios
    .get(`http://localhost:8080/employees/${id}`)
    .then((res) => res.data as Employee);
}

export async function createEmployee(employee: Employee) {
  return await axios
    .post("http://localhost:8080/employees", employee)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error creating employee " + error.code);
    });
}

export async function deleteEmployee(id: string) {
  return await axios
    .delete(`http://localhost:8080/employees/${id}`)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error deleting employee." + error.code);
    });
}