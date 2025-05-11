import Link from "next/link";
import { Container, Title, Text, Button } from "@mantine/core";

const Cta = () => {
  return (
    <section
      style={{
        padding: "4rem 0",
        background:
          "linear-gradient(to right, var(--mantine-color-purple-6), var(--mantine-color-pink-6))",
        color: "white",
      }}
    >
      <Container size="lg" ta="center">
        <Title
          order={2}
          mb="md"
          size="h2"
          style={{
            fontSize: "clamp(1.875rem, 2.5vw, 2.25rem)",
            fontWeight: 700,
          }}
        >
          Ready to start writing?
        </Title>
        <Text size="xl" mb="xl" maw={600} mx="auto" opacity={0.9}>
          Share your knowledge and insights with our community of developers and
          designers.
        </Text>
        <Button
          component={Link}
          href="/blog/create"
          size="lg"
          variant="filled"
          color="white"
          c="var(--mantine-color-purple-6)"
          styles={{
            root: {
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            },
          }}
        >
          Start Writing Today
        </Button>
      </Container>
    </section>
  );
};

export default Cta;
