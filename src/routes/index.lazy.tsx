import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/wines">Home</Link>
      </div>
      <hr />
    </>
  );
}
