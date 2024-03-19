import { ProductionLine } from "@/types/types.ts";
import axios from "axios";

export async function getAllProductionLines() {
  return await axios
    .get("http://localhost:8080/productionline")
    .then((res) => res.data as ProductionLine[]);
}

export async function getProductionLineById(id: string) {
  return await axios
    .get(`http://localhost:8080/productionline/${id}`)
    .then((res) => res.data as ProductionLine);
}

export async function createProductionLine(productionLine: ProductionLine) {
  return await axios
    .post("http://localhost:8080/productionline", productionLine)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error creating production line" + error.code);
    });
}

export async function deleteProductionLine(id: string) {
  return await axios
    .delete(`http://localhost:8080/productionline/${id}`)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error deleting production line." + error.code);
    });
}

export async function updateProductionLine(productionLine: ProductionLine) {
  return await axios
    .put("http://localhost:8080/productionline", productionLine)
    .then((r) => r.data)
    .catch((error) => {
      console.log("Error updating production line" + error.code);
    });
}