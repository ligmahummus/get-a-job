import { createTRPCRouter, publicProcedure } from "../trpc";
import * as z from "zod";

const profileRouter = createTRPCRouter({
  getProfileBySlug: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.profile.findFirst({
        where: { slug: input, active: true },
      });

      console.log(user);

      return user;
    }),
});

export default profileRouter;
