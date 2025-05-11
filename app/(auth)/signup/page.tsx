"use client";

import type React from "react";
import { useState } from "react";
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
  Progress,
} from "@mantine/core";
import { Mail, User, Check, X } from "lucide-react";
import { useForm } from "@mantine/form";
import googleIcon from "@/public/google.webp";
export default function SignupPage() {
  // State for terms agreement
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Mantine form hook for managing form state
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: {
      name: (value) => (value.trim().length > 0 ? null : "Name is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length > 0 ? null : "Password is required"),
    },
  });

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    if (!password) return 0;
    let strength = 0;

    // Length check
    if (password.length >= 8) strength += 25;

    // Contains number
    if (/\d/.test(password)) strength += 25;

    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 25;

    // Contains uppercase or special char
    if (/[A-Z]/.test(password) || /[^A-Za-z0-9]/.test(password)) strength += 25;

    return strength;
  };

  const passwordStrength = calculatePasswordStrength(form.values.password);

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 25) return "Weak";
    if (passwordStrength <= 50) return "Fair";
    if (passwordStrength <= 75) return "Good";
    return "Strong";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return "red";
    if (passwordStrength <= 50) return "yellow";
    if (passwordStrength <= 75) return "emerald";
    return "green";
  };

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
            Create an account
          </h2>
          <Text size="sm" color="dimmed" mt="sm">
            Join our community of developers and writers
          </Text>
        </div>

        <Card withBorder shadow="lg" radius="md">
          <Card.Section p="lg">
            <Text size="xl" fw={500}>
              Sign up
            </Text>
            <Text size="sm" color="dimmed" mt="xs">
              Enter your information to create an account
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
                Sign up with Google
              </Button>

              <Divider
                label="Or continue with"
                labelPosition="center"
                my="sm"
              />

              <form
                onSubmit={form.onSubmit((values) =>
                  console.log({ ...values, agreedToTerms })
                )}
                className="space-y-4"
              >
                <TextInput
                  id="name"
                  label="Full Name"
                  placeholder="John Doe"
                  leftSection={<User size={16} />}
                  {...form.getInputProps("name")}
                  required
                />

                <TextInput
                  id="email"
                  label="Email"
                  placeholder="name@example.com"
                  leftSection={<Mail size={16} />}
                  {...form.getInputProps("email")}
                  required
                />

                <div className="space-y-2">
                  <PasswordInput
                    id="password"
                    label="Password"
                    placeholder="••••••••"
                    {...form.getInputProps("password")}
                    required
                  />

                  {form.values.password && (
                    <div className="space-y-2">
                      <Group justify="apart">
                        <Text size="xs">Password strength:</Text>
                        <Text size="xs" fw={500}>
                          {getPasswordStrengthText()}
                        </Text>
                      </Group>
                      <Progress
                        value={passwordStrength}
                        size="sm"
                        color={getPasswordStrengthColor()}
                      />

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <Group gap={4} align-items="center">
                          {form.values.password.length >= 8 ? (
                            <Check size={12} color="green" />
                          ) : (
                            <X size={12} color="red" />
                          )}
                          <Text size="xs">At least 8 characters</Text>
                        </Group>
                        <Group gap={4} align-items="center">
                          {/\d/.test(form.values.password) ? (
                            <Check size={12} color="green" />
                          ) : (
                            <X size={12} color="red" />
                          )}
                          <Text size="xs">Contains a number</Text>
                        </Group>
                        <Group gap={4} align-items="center">
                          {/[a-z]/.test(form.values.password) ? (
                            <Check size={12} color="green" />
                          ) : (
                            <X size={12} color="red" />
                          )}
                          <Text size="xs">Contains lowercase</Text>
                        </Group>
                        <Group gap={4} align-items="center">
                          {/[A-Z]/.test(form.values.password) ||
                          /[^A-Za-z0-9]/.test(form.values.password) ? (
                            <Check size={12} color="green" />
                          ) : (
                            <X size={12} color="red" />
                          )}
                          <Text size="xs">Contains uppercase/symbol</Text>
                        </Group>
                      </div>
                    </div>
                  )}
                </div>

                <Checkbox
                  id="terms"
                  label={
                    <Text size="sm">
                      I agree to the{" "}
                      <Anchor href="/terms" component={Link} inline>
                        Terms of Service
                      </Anchor>{" "}
                      and{" "}
                      <Anchor href="/privacy" component={Link} inline>
                        Privacy Policy
                      </Anchor>
                    </Text>
                  }
                  checked={agreedToTerms}
                  onChange={(event) =>
                    setAgreedToTerms(event.currentTarget.checked)
                  }
                  mt="sm"
                />

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  className="gradient-button text-white"
                  disabled={!agreedToTerms}
                >
                  Create account
                </Button>
              </form>
            </Stack>
          </Card.Section>

          <Card.Section p="lg" withBorder>
            <Text size="sm" color="dimmed" ta="center">
              Already have an account?{" "}
              <Anchor href="/login" component={Link}>
                Sign in
              </Anchor>
            </Text>
          </Card.Section>
        </Card>

        <Text size="xs" color="dimmed" ta="center" mt="lg">
          By creating an account, you agree to our{" "}
          <Anchor href="/terms" component={Link} underline="always">
            Terms of Service
          </Anchor>{" "}
          and{" "}
          <Anchor href="/privacy" component={Link} underline="always">
            Privacy Policy
          </Anchor>
          .
        </Text>
      </div>
    </div>
  );
}
