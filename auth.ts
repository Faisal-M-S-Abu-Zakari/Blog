import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/libs/prisma";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/utils/LoginValidation";
import bcrypt from "bcryptjs";

const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      //here i will do the login process validation from the form data
      async authorize(data) {
        // const validation = loginSchema.parse(data);
        // const user = await prisma.user.findUnique({
        //   where: { email: validation.email },
        // });
        // if (!user || !user.password) throw new Error("Invalid credentials");
        // const isPasswordValid = await bcrypt.compare(
        //   validation.password,
        //   user.password
        // );
        // if (!isPasswordValid) throw new Error("Invalid credentials");
        // return user;
        const validation = loginSchema.parse(data);
        if (validation) {
          // first i will check if the user exists
          const user = await prisma.user.findUnique({
            where: { email: validation.email },
          });
          if (!user || !user.password) throw new Error("Invalid credentials");
          // then i will check if the password is valid
          const isPasswordValid = await bcrypt.compare(
            validation.password,
            user.password
          );
          if (!isPasswordValid) throw new Error("Invalid credentials");
          // if the user and password are valid then i will return the user
          return user;
        }
        return null;
      },
    }),
  ],
});
export { handlers, auth };
