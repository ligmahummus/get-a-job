import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "~/env.mjs";
import { db } from "~/server/db";

export type UserRole = "USER" | "ADMIN" | "RECRUITER";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      blocked: boolean;
      role: UserRole;
      profile: string;
    } & DefaultSession["user"];
  }

  interface User {
    blocked: boolean;
    profile: string;
    role: UserRole;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: async ({ session, user }) => {
      const profileId =
        user.name?.toLowerCase().replace(/\s/g, "-") +
        "-" +
        user.id.slice(user.id.length - 7, user.id.length);

      try {
        await db.profile.upsert({
          where: { userId: user.id },
          update: {
            lastSeen: new Date().toISOString(),
          },
          create: {
            slug: profileId,
            userId: user.id,
            displayName: user.name ?? "John Doe",
            image: user.image ?? "",
          },
        });
      } catch (error) {
        throw new Error(`Failed to update profile: ${JSON.stringify(error)}`);
      }

      return {
        ...session,
        user: {
          ...session.user,
          blocked: user.blocked,
          role: user.role,
          profile: profileId,
          id: user.id,
        },
      };
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
