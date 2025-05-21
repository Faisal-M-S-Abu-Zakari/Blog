import { ChevronRight, Clock } from "lucide-react";
import {
  Card,
  Image,
  Button,
  Text,
  Group,
  Stack,
  Container,
  Title,
  Box,
  Badge,
} from "@mantine/core";
import featuredPost from "@/constant/featuredPost";
import Link from "next/link";

const Featured = () => {
  return (
    <Box py="xl">
      <Container size="lg">
        <Group justify="space-between" mb="lg">
          <Title order={2} fw={700}>
            Featured Post
          </Title>
          <Button
            component="a"
            href="/blog"
            variant="subtle"
            color="blue"
            rightSection={<ChevronRight size={16} />}
          >
            View all posts
          </Button>
        </Group>

        <Card shadow="md" radius="md" withBorder>
          <Group wrap="nowrap" align="stretch">
            <Box pos="relative" style={{ flex: 1 }}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                h={400}
                style={{ objectFit: "cover" }}
              />
              <Box pos="absolute" top={16} left={16}>
                <Badge
                  variant="filled"
                  color={
                    featuredPost.category.toLowerCase() === "technology"
                      ? "blue"
                      : featuredPost.category.toLowerCase() === "lifestyle"
                      ? "green"
                      : "gray"
                  }
                >
                  {featuredPost.category}
                </Badge>
              </Box>
            </Box>

            <Stack p="md" style={{ flex: 1 }} justify="center">
              <Title order={3} fw={700}>
                {featuredPost.title}
              </Title>
              <Text c="dimmed" size="md">
                {featuredPost.excerpt}
              </Text>

              <Group>
                <Image
                  src={featuredPost.author.avatar || "/placeholder.svg"}
                  alt={featuredPost.author.name}
                  w={40}
                  h={40}
                  radius="xl"
                />
                <Stack gap={0}>
                  <Text fw={500}>{featuredPost.author.name}</Text>
                  <Group gap="xs">
                    <Text size="sm" c="dimmed">
                      {featuredPost.date}
                    </Text>
                    <Text size="sm" c="dimmed">
                      ·
                    </Text>
                    <Group gap="xs">
                      <Clock size={14} />
                      <Text size="sm" c="dimmed">
                        {featuredPost.readTime}
                      </Text>
                    </Group>
                  </Group>
                </Stack>
              </Group>
              <Link href={`/blog/${featuredPost.id}`}>
                <Button
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                  fullWidth
                >
                  Read Article
                </Button>
              </Link>
            </Stack>
          </Group>
        </Card>
      </Container>
    </Box>
  );
};

export default Featured;
