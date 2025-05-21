import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { Button, Card, Text, Anchor, Stack, Divider } from "@mantine/core";

import googleIcon from "@/public/google.webp";
import Signup from "../../../components/SignUp";
export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
      <div className="w-full max-w-md">
        {/* <div className="text-center mb-8">
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
        </div> */}

        <Card withBorder shadow="lg" radius="md">
          <div className="p-4 text-center">
            <Text size="xl" fw={500}>
              Sign up
            </Text>
            <Text size="sm" color="dimmed" mt="xs">
              Enter your information to create an account
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
                Sign up with Google
              </Button>

              <Divider
                label="Or continue with"
                labelPosition="center"
                my="sm"
              />

              <Signup />
            </Stack>
          </div>

          <div className="p-4 border-t">
            <Text size="sm" color="dimmed" ta="center">
              Already have an account?
              <Anchor href="/login" component={Link}>
                Sign in
              </Anchor>
            </Text>
          </div>
        </Card>
        {/* 
        <Text size="xs" color="dimmed" ta="center" mt="lg">
          By creating an account, you agree to our
          <Anchor href="/terms" component={Link} underline="always">
            Terms of Service
          </Anchor>
          and
          <Anchor href="/privacy" component={Link} underline="always">
            Privacy Policy
          </Anchor>
          .
        </Text> */}
      </div>
    </div>
  );
}
