import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Paper,
  Text,
  Title,
  Group,
  Stack,
  Box,
  Container,
} from "@mantine/core";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { getBlogPost } from "@/actions/getBlogPost";

export default async function BlogPost({ params }: { params: { id: string } }) {
  // Fetch the specific blog post using the id from params
  const post = await getBlogPost(params.id);

  // Handle case where no post is found
  if (!post) {
    return (
      <Container size="lg" py="xl">
        <Box maw={800} mx="auto">
          <Title order={1}>Post not found</Title>
          <Button
            variant="subtle"
            component={Link}
            href="/blog"
            leftSection={<ArrowLeft size={16} />}
            mt="md"
          >
            Back to all posts
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container size="lg" py="xl">
      <Box maw={800} mx="auto">
        {/* Back button */}
        <Button
          variant="subtle"
          component={Link}
          href="/blog"
          leftSection={<ArrowLeft size={16} />}
          mb="xl"
        >
          Back to all posts
        </Button>

        {/* Post header */}
        <Box mb="xl">
          <Text c="blue" fw={500} size="sm" mb="xs">
            {post.category}
          </Text>
          <Title order={1} mb="md">
            {post.title}
          </Title>
          <Text size="xl" c="dimmed" mb="lg">
            {post.excerpt}
          </Text>

          <Group mb="lg">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={48}
              height={48}
              style={{ borderRadius: "50%" }}
            />
            <Box>
              <Text fw={500}>{post.author.name}</Text>
              <Group gap="xs" c="dimmed">
                <Group gap={4}>
                  <Calendar size={16} />
                  <Text size="sm">
                    {new Date(post.date).toLocaleDateString()}
                  </Text>
                </Group>
                <Text>·</Text>
                <Group gap={4}>
                  <Clock size={16} />
                  <Text size="sm">{post.readTime}</Text>
                </Group>
              </Group>
            </Box>
          </Group>
        </Box>

        {/* Featured image */}
        <Box
          pos="relative"
          h={400}
          mb="xl"
          style={{
            borderRadius: "var(--mantine-radius-lg)",
            overflow: "hidden",
          }}
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </Box>

        {/* Post content */}
        <Box
          mb="xl"
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <Box mb="xl">
          <Title order={3} mb="xs">
            Tags
          </Title>
          <Group gap="xs">
            {post.tags.map((tag) => (
              <Button
                key={tag}
                component={Link}
                href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                variant="light"
                size="sm"
                radius="xl"
              >
                {tag}
              </Button>
            ))}
          </Group>
        </Box>

        {/* Share */}
        <Box mb="xl">
          <Title order={3} mb="xs">
            Share this post
          </Title>
          <Group gap="xs">
            <Button variant="light" size="sm" radius="xl">
              <Twitter size={16} />
            </Button>
            <Button variant="light" size="sm" radius="xl">
              <Facebook size={16} />
            </Button>
            <Button variant="light" size="sm" radius="xl">
              <Linkedin size={16} />
            </Button>
          </Group>
        </Box>

        {/* Author bio */}
        <Paper p="lg" mb="xl" withBorder>
          <Group align="flex-start" wrap="nowrap">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={80}
              height={80}
              style={{ borderRadius: "50%" }}
            />
            <Box>
              <Title order={3} mb="xs">
                About {post.author.name}
              </Title>
              <Text c="dimmed" mb="md">
                {post.author.bio}
              </Text>
              <Button
                variant="light"
                component={Link}
                href={`/author/${post.author.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                View all posts
              </Button>
            </Box>
          </Group>
        </Paper>

        {/* Related posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <Box>
            <Title order={2} mb="lg">
              Related Posts
            </Title>
            <Group gap="lg">
              {post.relatedPosts.map((relatedPost) => (
                <Paper
                  key={relatedPost.id}
                  withBorder
                  style={{ flex: 1, minWidth: 300 }}
                >
                  <Box pos="relative" h={192}>
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                  <Box p="md">
                    <Title order={3} mb="xs">
                      {relatedPost.title}
                    </Title>
                    <Text c="dimmed" mb="md" lineClamp={2}>
                      {relatedPost.excerpt}
                    </Text>
                    <Button
                      variant="light"
                      component={Link}
                      href={`/blog/${relatedPost.id}`}
                    >
                      Read more
                    </Button>
                  </Box>
                </Paper>
              ))}
            </Group>
          </Box>
        )}
      </Box>
    </Container>
  );
}
