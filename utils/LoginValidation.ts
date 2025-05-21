import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "the password must be longer" }),
  remember: z.boolean(),
});

export type loginType = z.infer<typeof loginSchema>;
