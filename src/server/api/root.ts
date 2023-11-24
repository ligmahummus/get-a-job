import { createTRPCRouter } from "~/server/api/trpc";
import accountRouter from "./routers/account-router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // Public prodcedures

  // Protected procedures
  account: accountRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
