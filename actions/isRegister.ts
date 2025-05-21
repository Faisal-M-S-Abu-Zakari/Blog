"use server";
import { FormSchema, RegisterSchema } from "@/utils/RegisterValidation";
import { prisma } from "@/libs/prisma";
import bcrypt from "bcryptjs";

export const isRegister = async (formdata: FormSchema) => {
  try {
    // Validate form data
    const result = RegisterSchema.safeParse(formdata);
    if (!result.success) {
      return {
        success: false,
        message: "Invalide Data",
      };
    }

    const { email, password, name, confirmPassword } = result.data;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      },
    });

    return {
      success: true,
      message: "Registration successful! You can now log in.",
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
};
