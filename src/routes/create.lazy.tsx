import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create")({
  component: Create,
});

function Create() {
  return (
    <div className="flex justify-center">
      <h3>Create new </h3>
    </div>
  );
}