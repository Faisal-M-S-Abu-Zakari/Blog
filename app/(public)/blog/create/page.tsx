import Link from "next/link";
import { Button, Title, Text, Box } from "@mantine/core";
import { ArrowLeft } from "lucide-react";
import CreateBlog from "../../../components/CreateForm";

export default function CreatePostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Box mb="xl">
        <Link href="/blog">
          <Button
            variant="subtle"
            leftSection={<ArrowLeft size={16} />}
            mb="md"
          >
            Back to blog
          </Button>
        </Link>
        <Title order={1} mb="xs">
          Create New Post
        </Title>
        <Text c="dimmed">
          Share your knowledge and insights with our community
        </Text>
        <CreateBlog />
      </Box>
    </div>
  );
}
