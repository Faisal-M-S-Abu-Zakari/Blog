import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/libs/prisma";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/utils/LoginValidation";
import bcrypt from "bcryptjs";

const { handlers, auth, signIn } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(data) {
        try {
          const validation = loginSchema.parse(data);
          //find the user by email
          const user = await prisma.user.findUnique({
            where: { email: validation.email },
          });
          if (!user) throw new Error("User not found");
          if (!user.password) throw new Error("No password set for this user");
          //   check the password
          const isPasswordValid = await bcrypt.compare(
            validation.password,
            user.password
          );
          if (!isPasswordValid) throw new Error("Incorrect password");
          return user;
        } catch (error) {
          throw error instanceof Error
            ? error
            : new Error("Authentication failed");
        }
      },
    }),
  ],
});

export { handlers, auth, signIn };
