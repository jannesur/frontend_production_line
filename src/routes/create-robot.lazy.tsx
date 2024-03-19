import { createLazyFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { createRobot } from "@/api/robot.ts";
import { useCurrentRobotStore } from "@/store.ts";

// @ts-ignore
export const Route = createLazyFileRoute("/create-robot")({
  component: CreateRobot,
});

function CreateRobot() {
  const currentRobot = useCurrentRobotStore();
  const formSchema = z.object({
    robot: z.object({
      name: z.string().min(2).max(50),
      uuid: z.string().min(2).max(50),
      durationInMinutes: z.number().min(1).max(1000),
      failureProbability: z.number().min(1).max(100),
      timeToRecovery: z.number().min(1).max(1000),
      maintenanceTimeInMinutes: z.number().min(1).max(1000),
      maintenanceCycleInMinutes: z.number().min(1).max(1000),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      robot: {
        name: currentRobot.currentRobot?.name,
        uuid: currentRobot.currentRobot?.uuid,
        durationInMinutes: currentRobot.currentRobot?.durationInMinutes,
        failureProbability: currentRobot.currentRobot?.failureProbability,
        timeToRecovery: currentRobot.currentRobot?.timeToRecovery,
        maintenanceTimeInMinutes:
          currentRobot.currentRobot?.maintenanceTimeInMinutes,
        maintenanceCycleInMinutes:
          currentRobot.currentRobot?.maintenanceCycleInMinutes,
      },
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (form.formState.isSubmitting) return;
    createRobot(data.robot)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"flex justify-center pt-10 gap-4 flex-col px-24"}
      >
        <FormField
          control={form.control}
          name="robot.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Badge className={"text-white"}>Robot name</Badge>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"Robot name"}
                  className={"w-full"}
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="robot.maintenanceTimeInMinutes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Badge className={"text-white"}>
                  Robot Maintenancetime in minutes
                </Badge>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"in minutes"}
                  className={"w-full"}
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="robot.maintenanceCycleInMinutes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Badge className={"text-white"}>
                  Robot Maintenancecycle in minutes
                </Badge>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"in minutes"}
                  className={"w-full"}
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="robot.failureProbability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Badge className={"text-white"}>
                  Robot Failure Probability in %
                </Badge>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"in percentage"}
                  className={"w-full"}
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="robot.timeToRecovery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Badge className={"text-white"}>
                  Robot Time to Recovery in minutes
                </Badge>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"in minutes"}
                  className={"w-full"}
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="robot.durationInMinutes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Badge className={"text-white"}>
                  Robot Duration in minutes
                </Badge>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"in minutes"}
                  className={"w-full"}
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className={"bg-primary text-white"}
          onClick={() => onSubmit(form.getValues())}
        >
          Create Robot
        </Button>
      </form>
    </Form>
  );
}