"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  TextInput,
  Group,
  Badge,
  Stack,
  Button,
  Paper,
  Avatar,
  Box,
  Pagination,
} from "@mantine/core";
import { Search, Clock } from "lucide-react";
import { posts } from "@/constant/posts";
import { categories } from "@/constant/categories";

export default function BlogPage() {
  const [activePage, setActivePage] = useState(1);

  return (
    <Container size="xl" py="xl">
      <Stack align="center" mb="xl">
        <Title order={1} ta="center" mb="md">
          Blog
        </Title>
        <Text size="xl" c="dimmed" maw={600} ta="center">
          Explore our latest articles, tutorials, and insights on web
          development and technology.
        </Text>
      </Stack>

      <Grid gutter="lg">
        {/* Sidebar */}
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Stack pos="sticky" top={20}>
            {/* Search */}
            <TextInput
              placeholder="Search articles..."
              leftSection={<Search size={16} />}
              size="md"
              mb="lg"
            />

            {/* Categories */}
            <Box mb="lg">
              <Title order={3} mb="md">
                Categories
              </Title>
              <Stack gap="xs">
                {categories.map((category) => (
                  <Group
                    key={category.name}
                    justify="space-between"
                    wrap="nowrap"
                  >
                    <Text
                      component={Link}
                      href={
                        category.name === "All"
                          ? "/blog"
                          : `/blog/category/${category.name.toLowerCase()}`
                      }
                      c="inherit"
                      td="none"
                      styles={{
                        root: {
                          "&:hover": {
                            color: "var(--mantine-color-blue-filled)",
                          },
                        },
                      }}
                    >
                      {category.name}
                    </Text>
                    <Badge size="sm" variant="light">
                      {category.count}
                    </Badge>
                  </Group>
                ))}
              </Stack>
            </Box>

            {/* Newsletter */}
            <Paper p="md" radius="md" bg="var(--mantine-color-gray-0)">
              <Stack gap="xs">
                <Title order={3}>Subscribe to our newsletter</Title>
                <Text size="sm" c="dimmed">
                  Get the latest articles and resources sent straight to your
                  inbox.
                </Text>
                <TextInput
                  type="email"
                  placeholder="Enter your email"
                  size="md"
                />
                <Button fullWidth>Subscribe</Button>
              </Stack>
            </Paper>
          </Stack>
        </Grid.Col>

        {/* Main content */}
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Grid gutter="md">
            {posts.map((post) => (
              <Grid.Col key={post.id} span={{ base: 12, sm: 6 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Card.Section>
                    <Box pos="relative" h={200}>
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <Badge
                        pos="absolute"
                        top={10}
                        left={10}
                        variant="filled"
                        color="blue"
                      >
                        {post.category}
                      </Badge>
                    </Box>
                  </Card.Section>

                  <Stack mt="md" gap="xs">
                    <Title order={3} lineClamp={2}>
                      <Text
                        component={Link}
                        href={`/blog/${post.id}`}
                        c="inherit"
                        td="none"
                        styles={{
                          root: {
                            "&:hover": {
                              color: "var(--mantine-color-blue-filled)",
                            },
                          },
                        }}
                      >
                        {post.title}
                      </Text>
                    </Title>

                    <Text c="dimmed" lineClamp={3} size="sm">
                      {post.excerpt}
                    </Text>

                    <Group gap="xs" mt="auto">
                      <Avatar
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        size="sm"
                        radius="xl"
                      />
                      <Box>
                        <Text size="sm" fw={500}>
                          {post.author.name}
                        </Text>
                        <Group gap={4}>
                          <Text size="xs" c="dimmed">
                            {post.date}
                          </Text>
                          <Text size="xs" c="dimmed">
                            ·
                          </Text>
                          <Group gap={4}>
                            <Clock size={14} />
                            <Text size="xs" c="dimmed">
                              {post.readTime}
                            </Text>
                          </Group>
                        </Group>
                      </Box>
                    </Group>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" fullWidth mt="md">
                        Read Article
                      </Button>
                    </Link>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>

          {/* Pagination */}
          <Group justify="center" mt="xl">
            <Pagination
              total={3}
              value={activePage}
              onChange={setActivePage}
              withEdges
            />
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
