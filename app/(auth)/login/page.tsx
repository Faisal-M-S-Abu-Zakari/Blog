"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  TextInput,
  PasswordInput,
  Checkbox,
  Card,
  Text,
  Anchor,
  Group,
  Stack,
  Divider,
} from "@mantine/core";
import { Mail } from "lucide-react";
import { useForm } from "@mantine/form";
import googleIcon from "@/public/google.webp";
export default function LoginPage() {
  // Mantine form hook for managing form state
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length > 0 ? null : "Password is required"),
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-purple to-theme-pink"
          >
            Faisal's Blogs
          </Link>
          <h2 className="mt-6 text-3xl font-bold tracking-tight font-display">
            Welcome back
          </h2>
          <Text size="sm" color="dimmed" mt="sm">
            Sign in to your account to continue your journey
          </Text>
        </div>

        <Card withBorder shadow="lg" radius="md">
          <Card.Section p="lg">
            <Text size="xl" fw={500}>
              Sign in to your account
            </Text>
            <Text size="sm" color="dimmed" mt="xs">
              Enter your credentials below to sign in
            </Text>
          </Card.Section>

          <Card.Section p="lg">
            <Stack gap="lg">
              <Button
                variant="outline"
                size="lg"
                leftSection={
                  <Image src={googleIcon} alt="Google" width={24} height={24} />
                }
              >
                Sign in with Google
              </Button>

              <Divider
                label="Or continue with"
                labelPosition="center"
                my="sm"
              />

              <form
                onSubmit={form.onSubmit((values) => console.log(values))}
                className="space-y-4"
              >
                <TextInput
                  id="email"
                  label="Email"
                  placeholder="name@example.com"
                  leftSection={<Mail size={16} />}
                  {...form.getInputProps("email")}
                  required
                />

                <PasswordInput
                  id="password"
                  label={
                    <Group justify="apart">
                      <Text size="sm">Password</Text>
                      <Anchor
                        href="/forgot-password"
                        size="sm"
                        component={Link}
                      >
                        Forgot password?
                      </Anchor>
                    </Group>
                  }
                  placeholder="••••••••"
                  {...form.getInputProps("password")}
                  required
                />

                <Checkbox
                  id="remember"
                  label="Remember me"
                  {...form.getInputProps("remember", { type: "checkbox" })}
                  mt="sm"
                />

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  className="gradient-button text-white"
                >
                  Sign in
                </Button>
              </form>
            </Stack>
          </Card.Section>

          <Card.Section p="lg" withBorder>
            <Text size="sm" color="dimmed" ta="center">
              Don't have an account?
              <Anchor href="/signup" component={Link}>
                Sign up
              </Anchor>
            </Text>
          </Card.Section>
        </Card>

        <Text size="xs" color="dimmed" ta="center" mt="lg">
          By signing in, you agree to our
          <Anchor href="/terms" component={Link} underline="always">
            Terms of Service
          </Anchor>
          and
          <Anchor href="/privacy" component={Link} underline="always">
            Privacy Policy
          </Anchor>
          .
        </Text>
      </div>
    </div>
  );
}
