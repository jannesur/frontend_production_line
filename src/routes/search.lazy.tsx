import { createLazyFileRoute } from "@tanstack/react-router";
import { filterAll } from "@/components/filterAll.ts";
import { useTypeStore } from "@/store.ts";
import { EmployeeTable } from "@/components/employee-table.tsx";
import { StationTable } from "@/components/station-table.tsx";
import { ProductionLineTableBarebones } from "@/components/production-line-table-barebones.tsx";
import { RobotTable } from "@/components/robot-table.tsx";

export const Route = createLazyFileRoute("/search")({
  component: Search,
});

function Search() {
  const currentType = filterAll();
  const typeStore = useTypeStore((state) => state.type);

  if (typeStore === "employee") {
    return <EmployeeTable employees={currentType} />;
  } else if (typeStore === "robot") {
    // @ts-ignore
    return <RobotTable robots={currentType} />;
  } else if (typeStore === "station") {
    // @ts-ignore
    return <StationTable stations={currentType} />;
  } else if (typeStore === "line") {
    // @ts-ignore
    return <ProductionLineTableBarebones productionLines={currentType} />;
  }
}