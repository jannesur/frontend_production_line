import { Chart } from "react-google-charts";
import { useEffect } from "react";
import { useStatisticStore } from "@/store.ts";

export function CustomBarChart() {
  const comparableProductionLines = useStatisticStore(
    (state) => state.comparableProductionLines,
  );
  useEffect(() => {}, []);
  const data = [
    ["Productionline", "Produced Cars"],
    comparableProductionLines.map((productionLine) => {
      return [productionLine.name, productionLine.productionSteps];
    }),
  ];
  const exmapleData = [
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ];

  const options = {
    title: "Production Lines and Produced Cars",
    chartArea: { width: "60%" },
    hAxis: {
      title: "Produced Cars",
      minValue: 0,
    },
    vAxis: {
      title: "Production lines",
    },
  };
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="800px"
      data={data}
      options={options}
    />
  );
}