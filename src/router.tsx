import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

let queryClient: QueryClient | undefined;

export const getQueryClient = () => {
  if (!queryClient) queryClient = new QueryClient();
  return queryClient;
};

export const getRouter = () => {
  const qc = getQueryClient();
  return createRouter({
    routeTree,
    context: { queryClient: qc },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
