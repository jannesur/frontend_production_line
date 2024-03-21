import { Chart } from "react-google-charts";
import { ProductionLine, VehicleModel } from "@/types/types.ts";

interface LineChartProps {
  mode: VehicleModel | undefined;
  productionLines: ProductionLine[];
}

export function CustomLineChart(props: LineChartProps) {
  const outsideData = props.productionLines.map((productionLine) => {
    return [productionLine.name, productionLine.producedCars];
  });
  const data = [["Production line", "Production Steps"], ...outsideData];

  const options = {
    title: "Production Lines and Produced Cars",
    sliceVisibilityThreshold: 0,
  };

  return (
    <Chart
      chartType="Line"
      width="100%"
      height="800px"
      data={data}
      options={options}
    />
  );
}