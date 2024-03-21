import axios from "axios";
import { Station } from "@/types/types.ts";

export async function getAllStations() {
  return await axios
    .get("http://localhost:8080/stations")
    .then((res) => res.data as Station[]);
}

export async function getAllStationsWithoutProductionLine() {
  return await axios
    .get("http://localhost:8080/stations/without-production-line")
    .then((res) => res.data as Station[]);
}

export async function getStationById(id: string) {
  return await axios
    .get(`http://localhost:8080/stations/${id}`)
    .then((res) => res.data as Station);
}

export async function createStation(station: Station) {
  return await axios
    .post("http://localhost:8080/stations", station)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error creating station" + error.code);
    });
}

export async function deleteStation(id: number) {
  return await axios
    .delete("http://localhost:8080/stations/" + id)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error deleting station." + error.code);
    });
}

export async function updateStation(station: Station) {
  return await axios
    .put("http://localhost:8080/stations", station)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error updating station" + error.code);
    });
}