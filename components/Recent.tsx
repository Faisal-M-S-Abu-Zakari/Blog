import recentPosts from "@/constant/recentPosts";
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  Avatar,
  Stack,
  Container,
  Title,
  Image,
} from "@mantine/core";
import { Clock, Link2 } from "lucide-react";
import Link from "next/link";
import classes from "./Recent.module.css";

const Recent = () => {
  return (
    <section className={classes.section}>
      <Container size="lg">
        <Title order={2} mb="xl" fw={700}>
          Recent Posts
        </Title>
        <div className={classes.grid}>
          {recentPosts.map((post) => (
            <Card
              key={post.id}
              shadow="md"
              padding="lg"
              radius="md"
              withBorder
              className={classes.card}
            >
              <Card.Section>
                <div className={classes.imageContainer}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    height={200}
                    className={classes.image}
                  />
                  <div className={classes.badgeContainer}>
                    <Badge
                      color={
                        post.category.toLowerCase() === "technology"
                          ? "blue"
                          : post.category.toLowerCase() === "lifestyle"
                          ? "green"
                          : "grape"
                      }
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </Card.Section>

              <Stack mt="md" mb="xs">
                <Title order={3} lineClamp={2}>
                  <Link href={`/blog/${post.id}`} className={classes.link}>
                    {post.title}
                  </Link>
                </Title>
                <Text size="sm" c="dimmed" lineClamp={2}>
                  {post.excerpt}
                </Text>
              </Stack>

              <Group mt="md" mb="xs">
                <Avatar
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  size="sm"
                  radius="xl"
                />
                <div>
                  <Text size="sm" fw={500}>
                    {post.author.name}
                  </Text>
                  <Group gap={4}>
                    <Text size="xs" c="dimmed">
                      {post.date}
                    </Text>
                    <Clock size={14} />
                    <Text size="xs" c="dimmed">
                      {post.readTime}
                    </Text>
                  </Group>
                </div>
              </Group>
              <Link href={`/blog/${post.id}`}>
                <Button
                  variant="outline"
                  fullWidth
                  leftSection={<Link2 size={16} />}
                  mt="md"
                >
                  Read Article
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Recent;
