import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="p-2 flex gap-2 w-5/6">Welcome</div>
      <hr />
    </>
  );
}
