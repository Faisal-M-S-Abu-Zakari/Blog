import {
  Badge,
  Button,
  Container,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
  rem,
  SimpleGrid,
} from "@mantine/core";
import { TrendingUp } from "lucide-react";
import trendingPosts from "@/constant/trendingPosts";
import Image from "next/image";
import Link from "next/link";

const TrendingNewsletter = () => {
  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        {/* Trending Posts */}
        <Stack gap="md">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <TrendingUp
              size={20}
              style={{ color: "var(--mantine-color-pink-6)" }}
            />
            <Title order={2}>Trending Now</Title>
          </div>

          <Stack gap="md">
            {trendingPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Paper
                  p="md"
                  radius="md"
                  withBorder
                  style={{
                    display: "flex",
                    alignItems: "center",
                    transition: "background-color 0.2s",
                    "&:hover": {
                      backgroundColor: "var(--mantine-color-gray-0)",
                    },
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: rem(64),
                      height: rem(64),
                      borderRadius: rem(8),
                      overflow: "hidden",
                      marginRight: rem(16),
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <Text fw={500} lineClamp={1} mb={4}>
                      {post.title}
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Badge variant="outline">{post.category}</Badge>
                      <Text
                        size="sm"
                        c="dimmed"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <TrendingUp size={12} /> {post.views} views
                      </Text>
                    </div>
                  </div>
                </Paper>
              </Link>
            ))}
          </Stack>
        </Stack>

        {/* Newsletter */}
        <Paper
          p="xl"
          radius="lg"
          style={{
            background:
              "linear-gradient(135deg, var(--mantine-color-purple-1), var(--mantine-color-pink-1))",
          }}
        >
          <Stack gap="md">
            <Title order={2}>Subscribe to our newsletter</Title>
            <Text c="dimmed">
              Get the latest articles, tutorials, and updates delivered straight
              to your inbox. No spam, unsubscribe anytime.
            </Text>

            <Stack gap="md">
              <TextInput label="Name" placeholder="Your name" size="md" />
              <TextInput
                label="Email"
                placeholder="Your email"
                type="email"
                size="md"
              />
              <Button
                fullWidth
                size="md"
                variant="gradient"
                gradient={{ from: "purple", to: "pink", deg: 45 }}
              >
                Subscribe
              </Button>
              <Text size="xs" c="dimmed" ta="center">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy.
              </Text>
            </Stack>
          </Stack>
        </Paper>
      </SimpleGrid>
    </Container>
  );
};

export default TrendingNewsletter;
