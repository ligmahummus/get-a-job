import { createTRPCRouter, publicProcedure } from "../trpc";
import * as z from "zod";

const profileRouter = createTRPCRouter({
  getProfileBySlug: publicProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return ctx.db.profile.findFirst({
        where: { slug: input, active: true },
      });
    }),
});

export default profileRouter;
