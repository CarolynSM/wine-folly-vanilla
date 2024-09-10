import {
  createRootRouteWithContext,
  Outlet,
  Link,
} from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <div className="flex flex-row">
        <div className="bg-white rounded-md m-2 w-1/6 text-center content-center flex flex-col">
          <span>Here is some navigation</span>
          <Link to="/wines">Wine</Link>
        </div>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
