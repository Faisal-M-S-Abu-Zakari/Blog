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

const LoginForm = () => {
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
    console.log(result);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <TextInput
        label="Email"
        placeholder="name@example.com"
        leftSection={<Mail size={16} />}
        {...register("email")}
        // required
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
        // required
        error={errors.password?.message}
      />

      <Checkbox label="Remember me" {...register("remember")} mt="sm" />

      <Button
        type="submit"
        fullWidth
        size="lg"
        className="gradient-button text-white"
      >
        {isSubmitting ? "Signning In..." : "Sign In"}
      </Button>
    </form>
  );
};

export default LoginForm;
