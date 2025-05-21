"use client";
import {
  Button,
  TextInput,
  PasswordInput,
  Checkbox,
  Text,
  Progress,
} from "@mantine/core";
import { Mail, User, Check, X } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, RegisterSchema } from "@/utils/RegisterValidation";
import {
  calculatePasswordStrength,
  getPasswordStrengthText,
} from "@/actions/password";
import { isRegister } from "@/actions/isRegister";

import { redirect } from "next/navigation";
import Swal from "sweetalert2";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreedToTerms: false,
    },
  });

  const passwordValue = watch("password");
  const passwordStrength = calculatePasswordStrength(passwordValue);

  const onSubmit = async (data: FormSchema) => {
    const result = await isRegister(data);

    if (!result.success) {
      Swal.fire({
        icon: "error",
        title: "Oops , Registration Failed",
        text: result.message,
        color: "red",
      });

      return; // Stop here if registration failed
    }

    // Only show success notification if registration was successful

    await Swal.fire({
      icon: "success",
      title: "Registration Successful",
      text: result.message,
      color: "green",
    });
    // Reset form and redirect after user presses "OK"
    reset();
    redirect("/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="space-y-2">
        <Text size="sm" fw={500}>
          Full Name
        </Text>
        <div className="relative">
          <TextInput
            id="name"
            leftSection={<User size={16} />}
            placeholder="John Doe"
            {...register("name")}
          />
        </div>
        {errors.name && (
          <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Text size="sm" fw={500}>
          Email
        </Text>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@example.com"
            leftSection={<Mail size={16} />}
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Text size="sm" fw={500}>
          Password
        </Text>
        <PasswordInput
          id="password"
          placeholder="••••••••"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
        )}

        {passwordValue && (
          <>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-500">Password strength:</span>
              <span className="text-xs font-medium">
                {getPasswordStrengthText(passwordStrength)}
              </span>
            </div>
            <Progress value={passwordStrength} className="h-1" />

            <div className="grid grid-cols-2 gap-2 text-xs mt-2">
              <div className="flex items-center gap-1">
                {passwordValue.length >= 8 ? (
                  <Check size={12} className="text-green-500" />
                ) : (
                  <X size={12} className="text-red-500" />
                )}
                <span>At least 8 characters</span>
              </div>
              <div className="flex items-center gap-1">
                {/\d/.test(passwordValue) ? (
                  <Check size={12} className="text-green-500" />
                ) : (
                  <X size={12} className="text-red-500" />
                )}
                <span>Contains a number</span>
              </div>
              <div className="flex items-center gap-1">
                {/[a-z]/.test(passwordValue) ? (
                  <Check size={12} className="text-green-500" />
                ) : (
                  <X size={12} className="text-red-500" />
                )}
                <span>Contains lowercase</span>
              </div>
              <div className="flex items-center gap-1">
                {/[A-Z]/.test(passwordValue) ||
                /[^A-Za-z0-9]/.test(passwordValue) ? (
                  <Check size={12} className="text-green-500" />
                ) : (
                  <X size={12} className="text-red-500" />
                )}
                <span>Contains uppercase/symbol</span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="space-y-2">
        <Text size="sm" fw={500}>
          Confirm Password
        </Text>
        <PasswordInput
          id="confirmPassword"
          placeholder="Re-enter your password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-500 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="flex items-start space-x-2 mt-3">
        <Checkbox id="terms" {...register("agreedToTerms")} />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of{" "}
            </Link>
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </label>
          {errors.agreedToTerms && (
            <p className="text-xs text-red-500">
              {errors.agreedToTerms.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="!w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registering..." : "Create Account"}
      </Button>
    </form>
  );
};

export default Signup;
