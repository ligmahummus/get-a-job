import { createTRPCRouter, protectedProcedure } from "../trpc";
import * as z from "zod";

const accountRouter = createTRPCRouter({
  getAccountById: protectedProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return ctx.db.profile.findUnique({ where: { userId: input } });
    }),
});

export default accountRouter;
