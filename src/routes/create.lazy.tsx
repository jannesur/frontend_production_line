import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create")({
  component: Create,
});

function Create() {
  return (
    <div className="p-2">
      <h3>Create</h3>
    </div>
  );
}