import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer.tsx";
import { ProductionStep } from "@/types/types.ts";
import { ArrowBigRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import React from "react";
import { useCurrentProductionLineStore } from "@/store.ts";

export function ProductionDrawer() {
  const state = useCurrentProductionLineStore();
  const [selected, setSelected] = React.useState<ProductionStep>(
    {} as ProductionStep,
  );
  const moveSelectedStepLeft = () => {
    // @ts-ignore
    const index = state.currentProductionLine.productionSteps.indexOf(selected);
    if (index === 0) return;
    const newSteps = state.currentProductionLine.productionSteps;
    if (newSteps && index) {
      const temp = newSteps[index - 1];
      // @ts-ignore
      newSteps[index - 1] = selected;
      newSteps[index] = temp;
    }
    //rerender component
    state.setCurrentProductionLine({
      ...state.currentProductionLine,
      productionSteps: newSteps,
    });
  };
  const moveSelectedStepRight = () => {
    // @ts-ignore
    const index = state.currentProductionLine.productionSteps.indexOf(selected);
    if (index === state.currentProductionLine.productionSteps.length - 1)
      return;
    const newSteps = state.currentProductionLine.productionSteps;
    if (newSteps) {
      const temp = newSteps[index + 1];
      // @ts-ignore
      newSteps[index + 1] = selected;
      newSteps[index] = temp;
    }
    //rerender component
    state.setCurrentProductionLine({
      ...state.currentProductionLine,
      productionSteps: newSteps,
    });
  };
  return (
    <>
      <Drawer>
        <DrawerTrigger className={"border rounded p-2"}>Details</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className={"justify-center flex"}>
              {state.currentProductionLine.name ||
                "Error selecting production line"}
            </DrawerTitle>
          </DrawerHeader>
          <div className={"flex justify-center pb-2"}>
            <div className={"flex flex-col"}>
              <div className={"flex flex-row pb-2"}>
                {state.currentProductionLine.productionSteps.map((step) => (
                  <div className={"px-4"}>
                    <Button
                      key={step.uuid}
                      className={"flex justify-between p-2 text-white"}
                      onClick={() => setSelected(step)}
                    >
                      <div>{step.name}</div>
                    </Button>
                  </div>
                ))}
              </div>
              <div className={"border p-2 justify-center flex"}>
                {selected.name}
                <div>
                  <Button
                    variant={"ghost"}
                    onClick={() => moveSelectedStepLeft()}
                  >
                    <ArrowLeft />
                  </Button>
                  <Button
                    variant={"ghost"}
                    onClick={() => moveSelectedStepRight()}
                  >
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            <DrawerFooter>
              Productionline production direction: <ArrowBigRight />
            </DrawerFooter>
          </div>
          <DrawerClose className={"border p-1 bg-accent"}>Close</DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
}