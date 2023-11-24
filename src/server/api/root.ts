import { createTRPCRouter } from "~/server/api/trpc";
import profileRouter from "./routers/profile-router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // Public prodcedures
  profile: profileRouter,
  // 'Me' procedures - (must be logged in && target record owned by me)
  // editProfile:
});

// export type definition of API
export type AppRouter = typeof appRouter;
