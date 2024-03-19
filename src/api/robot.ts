import axios from "axios";
import { Robot } from "@/types/types.ts";

export async function getAllRobots() {
  return await axios
    .get("http://localhost:8080/robots")
    .then((res) => res.data);
}

export async function getRobotById(id: string) {
  return await axios
    .get(`http://localhost:8080/robots/${id}`)
    .then((res) => res.data);
}

export async function createRobot(robot: Robot) {
  return await axios
    .post("http://localhost:8080/robots", robot)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error creating robot" + error.code);
    });
}

export async function deleteRobot(id: string) {
  return await axios
    .delete("http://localhost:8080/robots/" + id)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error deleting robot." + error.code);
    });
}

export async function updateRobot(robot: Robot) {
  return await axios
    .put("http://localhost:8080/robots", robot)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error updating robot" + error.code);
    });
}