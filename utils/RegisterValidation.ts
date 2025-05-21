import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is Required",
        invalid_type_error: "Name must be of type string",
      })
      .min(2, "the name must be longer"),
    email: z.string().email({ message: "invalid email" }),
    password: z.string().min(8, "the password must be longer"),
    confirmPassword: z
      .string()
      .min(8, { message: "the password must be longer" }),
    agreedToTerms: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "the passwords do not match",
  });

export type FormSchema = z.infer<typeof RegisterSchema>;
