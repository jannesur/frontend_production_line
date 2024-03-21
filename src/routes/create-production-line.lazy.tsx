// @ts-nocheck
import {
  useCurrentProductionLineStore,
  useRobotsStore,
  useStationsStore,
} from "@/store.ts";
import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Robot,
  SimulationStatus,
  Station,
  Status,
  VehicleModel,
} from "@/types/types.ts";
import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form.tsx";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductionLine } from "@/api/productionline.ts";
import { toast } from "sonner";

// @ts-ignore
export const Route = createLazyFileRoute("/create-production-line")({
  component: CreateProductionLine,
});

function CreateProductionLine() {
  const [currentProductionLine, setProductionLine] =
    useCurrentProductionLineStore((state) => [
      state.currentProductionLine,
      state.setCurrentProductionLine,
    ]);
  const [currentRobots, setCurrentRobots] = useState<Robot[]>(
    currentProductionLine.productionSteps.filter((step) => {
      return "maintenanceTimeInMinutes" in step;
    }) as Robot[]
  );
  const [currentStations, setCurrentStations] = useState<Station[]>(
    currentProductionLine.productionSteps.filter((step) => {
      return "employees" in step;
    }) as Station[]
  );
  const robots = useRobotsStore((state) => state.robots);
  const stations = useStationsStore((state) => state.stations);

  function checkIfStationIsInCurrentStations(station: Station) {
    let isInCurrentStations = false;
    currentStations.forEach((currentStation) => {
      if (currentStation.uuid === station.uuid) {
        isInCurrentStations = true;
      }
    });
    return isInCurrentStations;
  }

  function checkIfRobotIsInCurrentRobots(robot: Robot) {
    let isInCurrentRobots = false;
    currentRobots.forEach((currentRobot) => {
      if (currentRobot.uuid === robot.uuid) {
        isInCurrentRobots = true;
      }
    });
    return isInCurrentRobots;
  }

  const formSchema = z.object({
    productionLine: z.object({
      name: z.string().min(2).max(50),
      productionSteps: z.array(z.object({})),
      uuid: z.string().min(2).max(50),
      simulationStatus: z.nativeEnum(SimulationStatus),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productionLine: {
        name: currentProductionLine.name || "",
        productionSteps: currentProductionLine.productionSteps,
        simulationStatus: SimulationStatus.STOPPED,
        uuid: currentProductionLine.uuid || "",
      },
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    let complete = true;
    if (currentRobots.length + currentStations.length < 3) {
      toast(
        "The production line will be created but the state will be incomplete. You need to add at least 3 production steps."
      );
      complete = false;
    }
    const newProductionLine = {
      ...data.productionLine,
      productionSteps: [...currentRobots, ...currentStations],
      status: complete ? Status.READY : Status.INCOMPLETE,
      vehicleModel: currentProductionLine.vehicleModel,
    };
    createProductionLine(newProductionLine).catch((e) => {
      toast(e.message);
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={"flex justify-center pt-10 gap-4 flex-col px-24"}
        >
          <FormField
            control={form.control}
            name="productionLine.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Badge className={"text-white"}>Production Line name</Badge>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={"Production Line name"}
                    className={"w-full"}
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Badge className={"text-white w-36 flex justify-center mt-4"}>
            Production steps:
          </Badge>
          <div
            className={"flex flex-row gap-4 justify-start border-b pt-4 pb-2"}
          >
            <Badge className={"text-white w-1/6 flex justify-center"}>
              Stations
            </Badge>
            <div className={"w-1/3 rounded-lg"}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className={"w-max"}>
                  <Button
                    variant={"outline"}
                    className={"flex justify-start w-max"}
                  >
                    {currentStations.length
                      ? currentStations.length
                      : "Select Stations"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {stations.map((station: Station) => (
                    <DropdownMenuCheckboxItem
                      key={station.uuid}
                      checked={checkIfStationIsInCurrentStations(station)}
                      onCheckedChange={() => {
                        if (checkIfStationIsInCurrentStations(station)) {
                          setCurrentStations(
                            currentStations.filter(
                              (s) => s.uuid !== station.uuid
                            )
                          );
                          setProductionLine({
                            ...currentProductionLine,
                            productionSteps:
                              currentProductionLine.productionSteps.filter(
                                (s) => s.uuid !== station.uuid
                              ),
                          });
                        } else {
                          setCurrentStations([...currentStations, station]);
                          setProductionLine({
                            ...currentProductionLine,
                            productionSteps: [
                              ...currentProductionLine.productionSteps,
                              station,
                            ],
                          });
                        }
                      }}
                    >
                      {station.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Badge className={"text-white w-1/6 flex justify-center"}>
              Robots
            </Badge>
            <div className={"w-1/3 rounded-lg"}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className={"text-sm"}>
                  <Button
                    variant={"outline"}
                    className={"flex justify-start w-max"}
                  >
                    {currentRobots.length > 0
                      ? currentRobots.length
                      : "Select Robots"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {robots.map((robot) => (
                    <DropdownMenuCheckboxItem
                      key={robot.uuid}
                      checked={checkIfRobotIsInCurrentRobots(robot)}
                      onCheckedChange={() => {
                        console.log("robot", robot);
                        if (checkIfRobotIsInCurrentRobots(robot)) {
                          setCurrentRobots(
                            currentRobots.filter((r) => r.uuid !== robot.uuid)
                          );
                          setProductionLine({
                            ...currentProductionLine,
                            productionSteps:
                              currentProductionLine.productionSteps.filter(
                                (r) => r.uuid !== robot.uuid
                              ),
                          });
                        } else {
                          setCurrentRobots([...currentRobots, robot]);
                          setProductionLine({
                            ...currentProductionLine,
                            productionSteps: [
                              ...currentProductionLine.productionSteps,
                              robot,
                            ],
                          });
                        }
                      }}
                    >
                      {robot.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Badge className={"text-white w-36"}>Vehicle Model</Badge>
          <Select>
            <SelectTrigger>
              <SelectValue
                placeholder={
                  currentProductionLine?.vehicleModel || "Select Vehicle Model"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {Object.values(VehicleModel)
                .filter((value) => value.toString().length > 1)
                .map((vehicleModel) => (
                  <SelectItem
                    key={vehicleModel}
                    value={vehicleModel as keyof typeof VehicleModel}
                    onClick={() =>
                      setProductionLine({
                        ...currentProductionLine,
                        vehicleModel:
                          VehicleModel[
                            vehicleModel as keyof typeof VehicleModel
                          ],
                      })
                    }
                  >
                    {vehicleModel.toString()}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>

          <Button
            type={"submit"}
            className={"bg-primary text-white"}
            onClick={() => onSubmit(form.getValues())}
          >
            Create Production Line
          </Button>
        </form>
      </Form>
    </>
  );
}
