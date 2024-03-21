import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button.tsx";
import { useCurrentEmployeeStore, useStationsStore } from "@/store.ts";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { createEmployee } from "@/api/employee.ts";

// @ts-ignore
export const Route = createLazyFileRoute("/create-employee")({
  component: CreateEmployee,
});

function CreateEmployee() {
  const currentEmployee = useCurrentEmployeeStore();
  const stations = useStationsStore((state) => state.stations);
  const formSchema = z.object({
    employee: z.object({
      name: z.string().min(2).max(50),
      uuid: z.string().min(2).max(50),
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
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employee: {
        name: currentEmployee.currentEmployee.name,
        uuid: currentEmployee.currentEmployee.uuid,
        station: currentEmployee.currentEmployee.station,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    values.employee.station.name =
      stations.find((station) => station.uuid === values.employee.station.uuid)
        ?.name || values.employee.station.name;
    createEmployee(values.employee).catch((error) => {
      console.error(error);
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"flex justify-center pt-10 gap-4 flex-col px-24"}
      >
        <FormField
          control={form.control}
          name="employee.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Badge className={"text-white"}>Employee name</Badge>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"Employee name"}
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
        <FormField
          control={form.control}
          name="employee.station.uuid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Badge className={"text-white"}>Station</Badge>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} {...field}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={"Select a station"}
                      ></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {stations.map((station) => (
                      <SelectItem key={station.uuid} value={station.uuid}>
                        {station.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                The station the employee is assigned to.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          size={"lg"}
          className={"bg-primary text-white"}
          type="submit"
          onClick={() => onSubmit(form.getValues())}
        >
          Create Employee
        </Button>
      </form>
    </Form>
  );
}