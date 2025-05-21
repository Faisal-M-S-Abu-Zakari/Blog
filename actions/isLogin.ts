"use server";

import { signIn } from "@/auth";
import { loginSchema, loginType } from "@/utils/LoginValidation";

export const isLogin = async (formdata: loginType) => {
  const result = loginSchema.safeParse(formdata);
  if (!result.success) {
    const errorMessage = Object.values(result.error.flatten().fieldErrors)
      .flat()
      .join(", ");
    return { success: false, message: errorMessage || "Invalid input" };
  }

  try {
    await signIn("credentials", {
      email: result.data.email,
      password: result.data.password,
      redirect: false, // Prevent NextAuth from redirecting immediately
    });
    return { success: true, message: "Logged in successfully" };
  } catch (error) {
    return { success: false, message: "Invalid credentials or server error" };
  }
};
