"use client";
import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Card, Text, Anchor, Stack, Divider } from "@mantine/core";
import googleIcon from "@/public/google.webp";
import LoginForm from "../../../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-4 lg:px-8 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
      <div className="w-full max-w-md">
        <Card withBorder shadow="lg" radius="md">
          <div className="p-4 text-center">
            <Text size="xl" fw={500}>
              Sign in to your account
            </Text>
            <Text size="sm" color="dimmed" mt="xs">
              Enter your credentials below to sign in
            </Text>
          </div>

          <div className="p-4">
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

              <LoginForm />
            </Stack>
          </div>

          <div className="p-4 border-t">
            <Text size="sm" color="dimmed" ta="center">
              Don't have an account?
              <Anchor href="/signup" component={Link}>
                Sign up
              </Anchor>
            </Text>
          </div>
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
