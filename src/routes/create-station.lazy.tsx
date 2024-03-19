import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useCurrentStationStore, useEmployeeStore } from "@/store.ts";
import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { createStation } from "@/api/station.ts";

// @ts-ignore
export const Route = createLazyFileRoute("/create-station")({
  component: CreateStation,
});

function CreateStation() {
  const currentStation = useCurrentStationStore();
  const formSchema = z.object({
    station: z.object({
      name: z.string().min(2).max(50),
      uuid: z.string().min(2).max(50),
      employees: z.array(
        z.object({
          name: z.string().min(2).max(50),
          uuid: z.string().min(2).max(50),
        }),
      ),
      durationInMinutes: z.number().min(1).max(1000),
      failureProbability: z.number().min(1).max(1000),
      timeToRecovery: z.number().min(1).max(1000),
    }),
  });
  const employees = useEmployeeStore((state) => state.employees);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      station: {
        name: currentStation.currentStation.name
          ? currentStation.currentStation.name
          : "",
        uuid: currentStation.currentStation.uuid
          ? currentStation.currentStation.uuid
          : "",
        employees: currentStation.currentStation.employees
          ? currentStation.currentStation.employees
          : [],
        durationInMinutes: currentStation.currentStation.durationInMinutes
          ? currentStation.currentStation.durationInMinutes
          : 0,
        failureProbability: currentStation.currentStation.failureProbability
          ? currentStation.currentStation.failureProbability
          : 0,
        timeToRecovery: currentStation.currentStation.timeToRecovery
          ? currentStation.currentStation.timeToRecovery
          : 0,
      },
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createStation(values.station)
      .then((r) => console.log(r))
      .catch((e) => console.error(e));
  };
  return (
    <>
      <Form {...form}>
        <form
          name={"create-station"}
          onSubmit={form.handleSubmit(onSubmit)}
          className={"flex justify-center pt-10 gap-4 flex-col px-24"}
        >
          <FormField
            control={form.control}
            name="station.name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Badge className={"text-white"}>Station name</Badge>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={"Station name"}
                    className={"w-full"}
                    required
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  The name of the employee you want to create.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {employees.length > 0 ? (
            <FormField
              control={form.control}
              name={"station.employees"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <Badge className={"text-white w-44 flex justify-center"}>
                      Available Employees
                    </Badge>
                  </FormLabel>
                  <FormControl>
                    <DropdownMenu {...field}>
                      <FormControl>
                        <DropdownMenuTrigger asChild className={"w-max"}>
                          <Button
                            variant={"outline"}
                            className={"flex justify-start w-max"}
                          >
                            Select Employees
                          </Button>
                        </DropdownMenuTrigger>
                      </FormControl>
                      <DropdownMenuContent
                        key={field.value.values().toString()}
                      >
                        {employees.map((employee) => (
                          <DropdownMenuCheckboxItem
                            key={employee.uuid}
                            {...field}
                            onCheckedChange={() => {
                              if (
                                field.value.every(
                                  (emp) => emp.uuid !== employee.uuid,
                                )
                              ) {
                                field.onChange([...field.value, employee]);
                              } else {
                                field.onChange(
                                  field.value.filter(
                                    (emp) => emp.uuid !== employee.uuid,
                                  ),
                                );
                              }
                            }}
                          >
                            {employee.name}
                          </DropdownMenuCheckboxItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                  <FormDescription>
                    The station the employee is assigned to.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          ) : (
            <div className={"justify-center flex"}>
              <Badge className={"text-white"}>No Stations available.</Badge>
            </div>
          )}
          Selected Employees:
          {form.watch("station.employees").map((employee: any) => (
            <div key={employee.uuid}>{employee.name}</div>
          ))}
          <Button
            size={"lg"}
            className={"bg-primary text-white"}
            type="submit"
            onClick={() => onSubmit(form.getValues())}
          >
            Create Station
          </Button>
        </form>
      </Form>
    </>
  );
}