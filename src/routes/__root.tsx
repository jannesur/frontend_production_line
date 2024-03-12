import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { PlusCircle } from "lucide-react";
import { Card } from "@/components/ui/card.tsx";
import { ModeToggle } from "@/components/mode-toggle.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useSearchStore } from "@/store.ts";

export const Route = createRootRoute({
  component: Index,
});

function Index() {
  const state = useSearchStore();

  return (
    <>
      <ThemeProvider>
        <div className="p-2 px-16 flex justify-between bg-primary text-white">
          <Link to="/" className="text-2xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volkswagen_Logo_till_1995.svg/214px-Volkswagen_Logo_till_1995.svg.png"
              alt="Volkswagen"
              className="h-8 w-8 mr-2 inline"
            />
          </Link>
          <Input
            placeholder={"Start typing..."}
            autoFocus
            className={"w-64 text-black"}
            onChange={(e) => state.setQuery(e.target.value)}
            value={state.query}
          />
          <div className={"align-center"}>
            <Button size={"icon"} variant={"ghost"}>
              <Link to="/create">
                <PlusCircle />
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
        <hr />
        <div className={"px-36 pt-4"}>
          <Card className={"rounded-none h-[calc(100vh-100px)] overflow-auto"}>
            <Outlet />
          </Card>
        </div>
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  );
}