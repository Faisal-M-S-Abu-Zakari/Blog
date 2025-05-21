"use client";

import { useState, useRef } from "react";

import {
  Button,
  TextInput,
  Textarea,
  Select,
  Switch,
  Group,
  Stack,
  Paper,
  Title,
  Text,
  Box,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Upload, X, Plus, Save, Eye } from "lucide-react";
import { PostFormValues } from "@/@types/PostFormValues";
import { useForm, Controller } from "react-hook-form";
import { CreateCategory } from "@/constant/categories";
const CreateBlog = () => {
  const tagInputRef = useRef<HTMLInputElement>(null);
  const [previewMode, setPreviewMode] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<PostFormValues>({
    defaultValues: {
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
  });
  // Watch form values
  const formValues = watch();

  const handleAddTag = () => {
    const currentTag = tagInputRef.current?.value.trim();
    if (currentTag && !formValues.tags.includes(currentTag)) {
      setValue("tags", [...formValues.tags, currentTag]);
      if (tagInputRef.current) {
        tagInputRef.current.value = ""; // Clear input
      }
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setValue(
      "tags",
      formValues.tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const onSubmit = (values: PostFormValues) => {
    console.log(values);
    notifications.show({
      title: "Success",
      message: "Post created successfully!",
      color: "green",
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Group align="flex-start" gap="xl">
        {/* Main Content */}
        <Stack style={{ flex: 2 }} gap="xl">
          <TextInput
            label="Post Title"
            placeholder="Enter a descriptive title"
            size="lg"
            {...register("title", { required: "Title is required" })}
            error={errors.title?.message}
          />

          <TextInput
            label="Featured Image"
            placeholder="Upload featured image"
            accept="image/*"
            leftSection={<Upload size={16} />}
            {...register("featuredImage")}
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
                {formValues.content ? (
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <h1>{formValues.title || "Post Title"}</h1>
                    <p>{formValues.content}</p>
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
                {...register("content", { required: "Content is required" })}
                error={errors.content?.message}
              />
            )}
          </Box>

          <Textarea
            label="Excerpt"
            placeholder="Write a short excerpt for your post (appears in previews)"
            minRows={3}
            {...register("excerpt")}
          />
        </Stack>

        {/* Sidebar */}
        <Stack style={{ flex: 1 }} gap="xl">
          <Paper p="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Publish</Title>
              <Switch label="Published" {...register("isPublished")} />
              <Text size="sm" c="dimmed">
                {formValues.isPublished
                  ? "This post will be visible to everyone"
                  : "This post will be saved as a draft"}
              </Text>
              <Group>
                <Button
                  type="submit"
                  fullWidth
                  leftSection={<Save size={16} />}
                >
                  {formValues.isPublished ? "Publish Post" : "Save Draft"}
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
              <Controller
                name="category"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <Select
                    label="Category"
                    placeholder="Choose a category"
                    searchable
                    clearable
                    data={CreateCategory}
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                    onBlur={field.onBlur}
                    error={errors.category?.message}
                  />
                )}
              />

              <Box>
                <Text fw={500} mb="xs">
                  Tags
                </Text>
                <Group>
                  <TextInput
                    placeholder="Add a tag"
                    ref={tagInputRef}
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
                  {formValues.tags.map((tag) => (
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
                  {formValues.tags.length === 0 && (
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
                {...register("seoTitle")}
              />
              <Textarea
                label="SEO Description"
                placeholder="SEO optimized description (optional)"
                minRows={3}
                {...register("seoDescription")}
              />
            </Stack>
          </Paper>
        </Stack>
      </Group>
    </form>
  );
};
export default CreateBlog;
