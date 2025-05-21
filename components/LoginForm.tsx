"use client";

import {
  Button,
  TextInput,
  PasswordInput,
  Checkbox,
  Text,
  Anchor,
  Group,
} from "@mantine/core";
import { Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { loginSchema, loginType } from "@/utils/LoginValidation";
import { useForm } from "react-hook-form";
import { isLogin } from "@/actions/isLogin";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; // For client-side redirect

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: loginType) => {
    const result = await isLogin(data);

    if (!result.success) {
      const errorMessage =
        typeof result.message === "string"
          ? result.message
          : Object.values(result.message).flat().join(", ");
      await Swal.fire({
        icon: "error",
        title: "Oops, Login Failed",
        text: errorMessage || "Please check your inputs and try again",
        color: "red",
      });
      return;
    }

    // Show success notification and wait for user to press "OK"
    await Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: result.message,
      color: "green",
    });

    // Reset form and redirect after user presses "OK"
    reset();
    router.push("/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        label="Email"
        placeholder="name@example.com"
        leftSection={<Mail size={16} />}
        {...register("email")}
        error={errors.email?.message}
      />

      <PasswordInput
        label={
          <Group justify="apart">
            <Text size="sm">Password</Text>
            <Anchor href="/forgot-password" size="sm" component={Link}>
              Forgot password?
            </Anchor>
          </Group>
        }
        placeholder="••••••••"
        {...register("password")}
        error={errors.password?.message}
      />

      <Checkbox label="Remember me" {...register("remember")} mt="sm" />

      <Button
        type="submit"
        fullWidth
        size="lg"
        className="gradient-button text-white"
        loading={isSubmitting}
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
};

export default LoginForm;
