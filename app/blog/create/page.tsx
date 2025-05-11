"use client";

import { useState } from "react";
import Link from "next/link";

import { useForm } from "@mantine/form";
import {
  Button,
  TextInput,
  Textarea,
  Select,
  Switch,
  FileInput,
  Group,
  Stack,
  Paper,
  Title,
  Text,
  Box,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Upload, X, Plus, Save, Eye, ArrowLeft } from "lucide-react";
import { PostFormValues } from "@/@types/PostFormValues";

export default function CreatePostPage() {
  const [previewMode, setPreviewMode] = useState(false);
  const [currentTag, setCurrentTag] = useState("");

  const form = useForm<PostFormValues>({
    initialValues: {
      title: "",
      content: "",
      excerpt: "",
      category: "",
      tags: [],
      featuredImage: null,
      isPublished: false,
      seoTitle: "",
      seoDescription: "",
    },
    validate: {
      title: (value) => (!value ? "Title is required" : null),
      content: (value) => (!value ? "Content is required" : null),
      category: (value) => (!value ? "Category is required" : null),
    },
  });

  const handleAddTag = () => {
    if (currentTag && !form.values.tags.includes(currentTag)) {
      form.setFieldValue("tags", [...form.values.tags, currentTag]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    form.setFieldValue(
      "tags",
      form.values.tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleSubmit = (values: PostFormValues) => {
    // In a real app, this would send data to the server
    console.log(values);
    notifications.show({
      title: "Success",
      message: "Post created successfully!",
      color: "green",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Box mb="xl">
        <Button
          variant="subtle"
          component={Link}
          href="/blog"
          leftSection={<ArrowLeft size={16} />}
          mb="md"
        >
          Back to blog
        </Button>
        <Title order={1} mb="xs">
          Create New Post
        </Title>
        <Text c="dimmed">
          Share your knowledge and insights with our community
        </Text>
      </Box>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group align="flex-start" gap="xl">
          {/* Main Content */}
          <Stack style={{ flex: 2 }} gap="xl">
            <TextInput
              label="Post Title"
              placeholder="Enter a descriptive title"
              size="lg"
              {...form.getInputProps("title")}
            />

            <FileInput
              label="Featured Image"
              placeholder="Upload featured image"
              accept="image/*"
              leftSection={<Upload size={16} />}
              clearable
              {...form.getInputProps("featuredImage")}
            />

            <Box>
              <Group mb="xs">
                <Button
                  variant={previewMode ? "default" : "filled"}
                  onClick={() => setPreviewMode(false)}
                >
                  Write
                </Button>
                <Button
                  variant={previewMode ? "filled" : "default"}
                  onClick={() => setPreviewMode(true)}
                >
                  Preview
                </Button>
              </Group>

              {previewMode ? (
                <Paper p="md" withBorder>
                  {form.values.content ? (
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <h1>{form.values.title || "Post Title"}</h1>
                      <p>{form.values.content}</p>
                    </div>
                  ) : (
                    <Stack align="center" py="xl" c="dimmed">
                      <Eye size={48} opacity={0.2} />
                      <Text>Your preview will appear here</Text>
                    </Stack>
                  )}
                </Paper>
              ) : (
                <Textarea
                  placeholder="Write your post content here..."
                  minRows={15}
                  {...form.getInputProps("content")}
                />
              )}
            </Box>

            <Textarea
              label="Excerpt"
              placeholder="Write a short excerpt for your post (appears in previews)"
              minRows={3}
              {...form.getInputProps("excerpt")}
            />
          </Stack>

          {/* Sidebar */}
          <Stack style={{ flex: 1 }} gap="xl">
            <Paper p="md" withBorder>
              <Stack gap="md">
                <Title order={3}>Publish</Title>
                <Switch
                  label="Published"
                  {...form.getInputProps("isPublished", { type: "checkbox" })}
                />
                <Text size="sm" c="dimmed">
                  {form.values.isPublished
                    ? "This post will be visible to everyone"
                    : "This post will be saved as a draft"}
                </Text>
                <Group>
                  <Button
                    type="submit"
                    fullWidth
                    leftSection={<Save size={16} />}
                  >
                    {form.values.isPublished ? "Publish Post" : "Save Draft"}
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    leftSection={<Eye size={16} />}
                    onClick={() => setPreviewMode(true)}
                  >
                    Preview
                  </Button>
                </Group>
              </Stack>
            </Paper>

            <Paper p="md" withBorder>
              <Stack gap="md">
                <Select
                  label="Category"
                  placeholder="Select a category"
                  data={[
                    { value: "development", label: "Development" },
                    { value: "design", label: "Design" },
                    { value: "react", label: "React" },
                    { value: "css", label: "CSS" },
                    { value: "typescript", label: "TypeScript" },
                    { value: "backend", label: "Backend" },
                  ]}
                  {...form.getInputProps("category")}
                />

                <Box>
                  <Text fw={500} mb="xs">
                    Tags
                  </Text>
                  <Group>
                    <TextInput
                      placeholder="Add a tag"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTag();
                        }
                      }}
                      style={{ flex: 1 }}
                    />
                    <Button onClick={handleAddTag} variant="light">
                      <Plus size={16} />
                    </Button>
                  </Group>
                  <Group gap="xs" mt="xs">
                    {form.values.tags.map((tag) => (
                      <Button
                        key={tag}
                        variant="light"
                        size="xs"
                        rightSection={
                          <X
                            size={14}
                            onClick={() => handleRemoveTag(tag)}
                            style={{ cursor: "pointer" }}
                          />
                        }
                      >
                        {tag}
                      </Button>
                    ))}
                    {form.values.tags.length === 0 && (
                      <Text size="sm" c="dimmed">
                        No tags added yet
                      </Text>
                    )}
                  </Group>
                </Box>
              </Stack>
            </Paper>

            <Paper p="md" withBorder>
              <Stack gap="md">
                <Title order={3}>SEO Settings</Title>
                <TextInput
                  label="SEO Title"
                  placeholder="SEO optimized title (optional)"
                  {...form.getInputProps("seoTitle")}
                />
                <Textarea
                  label="SEO Description"
                  placeholder="SEO optimized description (optional)"
                  minRows={3}
                  {...form.getInputProps("seoDescription")}
                />
              </Stack>
            </Paper>
          </Stack>
        </Group>
      </form>
    </div>
  );
}
