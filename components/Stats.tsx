import { BookOpen, TrendingUp, Users, Zap } from "lucide-react";
import {
  SimpleGrid,
  Paper,
  Text,
  ThemeIcon,
  Container,
  rem,
} from "@mantine/core";

export default function Stats() {
  return (
    <Container
      size="xl"
      py="xl"
      style={{
        background:
          "linear-gradient(to right, var(--mantine-color-purple-0), var(--mantine-color-pink-0))",
      }}
      className="mt-10"
    >
      <SimpleGrid cols={{ base: 2, md: 4 }} spacing="md">
        <Paper
          p="xl"
          radius="md"
          withBorder
          shadow="sm"
          bg="var(--mantine-color-white)"
        >
          <ThemeIcon
            size="xl"
            radius="xl"
            variant="light"
            color="purple"
            mb="md"
            mx="auto"
          >
            <BookOpen style={{ width: rem(24), height: rem(24) }} />
          </ThemeIcon>
          <Text size="xl" fw={700} ta="center" mb="xs">
            200+
          </Text>
          <Text c="dimmed" ta="center">
            Articles
          </Text>
        </Paper>

        <Paper
          p="xl"
          radius="md"
          withBorder
          shadow="sm"
          bg="var(--mantine-color-white)"
        >
          <ThemeIcon
            size="xl"
            radius="xl"
            variant="light"
            color="pink"
            mb="md"
            mx="auto"
          >
            <Users style={{ width: rem(24), height: rem(24) }} />
          </ThemeIcon>
          <Text size="xl" fw={700} ta="center" mb="xs">
            50k+
          </Text>
          <Text c="dimmed" ta="center">
            Readers
          </Text>
        </Paper>

        <Paper
          p="xl"
          radius="md"
          withBorder
          shadow="sm"
          bg="var(--mantine-color-white)"
        >
          <ThemeIcon
            size="xl"
            radius="xl"
            variant="light"
            color="teal"
            mb="md"
            mx="auto"
          >
            <Zap style={{ width: rem(24), height: rem(24) }} />
          </ThemeIcon>
          <Text size="xl" fw={700} ta="center" mb="xs">
            15+
          </Text>
          <Text c="dimmed" ta="center">
            Authors
          </Text>
        </Paper>

        <Paper
          p="xl"
          radius="md"
          withBorder
          shadow="sm"
          bg="var(--mantine-color-white)"
        >
          <ThemeIcon
            size="xl"
            radius="xl"
            variant="light"
            color="yellow"
            mb="md"
            mx="auto"
          >
            <TrendingUp style={{ width: rem(24), height: rem(24) }} />
          </ThemeIcon>
          <Text size="xl" fw={700} ta="center" mb="xs">
            1.2M+
          </Text>
          <Text c="dimmed" ta="center">
            Monthly Views
          </Text>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
