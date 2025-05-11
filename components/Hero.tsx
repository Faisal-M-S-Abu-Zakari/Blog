import {
  Button,
  Container,
  TextInput,
  Title,
  Text,
  Stack,
  Group,
  rem,
  Box,
} from "@mantine/core";
import { Search } from "lucide-react";
import { useStyles } from "./Hero.styles";

const Hero = () => {
  return (
    <Box component="section" style={useStyles.hero}>
      <Container size="lg" py={80}>
        <Stack align="center" gap="xl" mb={48}>
          <Title order={1} style={useStyles.title} ta="center">
            Faisal's Blogs
          </Title>
          <Text size="xl" style={useStyles.description} ta="center" maw={800}>
            Exploring the latest in web development, design, and technology
          </Text>
          <Group>
            <Button
              size="lg"
              variant="filled"
              color="white"
              style={useStyles.primaryButton}
            >
              Start Reading
            </Button>
            <Button
              size="lg"
              variant="outline"
              color="white"
              style={useStyles.secondaryButton}
            >
              Subscribe
            </Button>
          </Group>
        </Stack>

        <Container size="sm" pos="relative">
          <TextInput
            placeholder="Search articles..."
            size="lg"
            radius="xl"
            leftSection={<Search size={20} />}
            style={useStyles.searchInput}
            styles={{
              input: {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(4px)",
                color: "var(--mantine-color-purple-6)",
                "&:focus": {
                  borderColor: "var(--mantine-color-white)",
                },
              },
              section: {
                color: "var(--mantine-color-purple-6)",
              },
            }}
          />
        </Container>
      </Container>
    </Box>
  );
};

export default Hero;
