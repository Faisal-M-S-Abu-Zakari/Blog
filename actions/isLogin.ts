"use server";
import { loginSchema, loginType } from "@/utils/LoginValidation";

export const isLogin = async (formdata: loginType) => {
  const result = loginSchema.safeParse(formdata);
  if (!result.success) {
    return { error: result.error.flatten().fieldErrors };
  }
  return { success: "Logged In successfully" };
};
