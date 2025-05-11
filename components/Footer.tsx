"use client";

import Link from "next/link";
import { Twitter, Facebook, Instagram, Github, Linkedin } from "lucide-react";
import {
  Container,
  Grid,
  Text,
  Title,
  Stack,
  Group,
  TextInput,
  Button,
  Box,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Footer() {
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    // Add your newsletter subscription logic here
  };

  return (
    <Box
      component="footer"
      py="xl"
      mt="xl"
      className="footer-gradient"
      style={{
        borderTop: `1px solid ${theme.colors.gray[2]}`,
        background: `linear-gradient(to right, ${theme.colors.purple[0]}, ${theme.colors.pink[0]})`,
      }}
    >
      <style jsx global>{`
        .footer-gradient {
          border-top-color: ${theme.colors.gray[2]};
          background: linear-gradient(
            to right,
            ${theme.colors.purple[0]},
            ${theme.colors.pink[0]}
          );
        }
        .mantine-dark .footer-gradient {
          border-top-color: ${theme.colors.dark[4]};
          background: linear-gradient(
            to right,
            ${theme.colors.purple[9]}20,
            ${theme.colors.pink[9]}20
          );
        }
        .footer-border {
          border-top-color: ${theme.colors.gray[2]};
        }
        .mantine-dark .footer-border {
          border-top-color: ${theme.colors.dark[4]};
        }

        /* Social button styles */
        .social-button {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mantine-dark .social-button:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
      <Container size="lg">
        <Grid>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Title
              order={3}
              mb="md"
              // style={{
              //   background: `linear-gradient(to right, ${theme.colors.purple[6]}, ${theme.colors.pink[6]})`,
              //   WebkitBackgroundClip: "text",
              //   WebkitTextFillColor: "transparent",
              // }}
            >
              Faisal's Blogs
            </Title>
            <Text c="dimmed" mb="md">
              Exploring the latest in web development, design, and technology.
            </Text>
            <Group gap="xs">
              <Button
                component={Link}
                href="https://x.com/Abuzean2?t=MELB-tPxnh7lGAcqDiTTOQ&s=09"
                target="_blank"
                variant="subtle"
                color="blue"
                p={0}
                aria-label="Twitter"
                className="social-button twitter"
                styles={{
                  root: {
                    "&:hover": {
                      backgroundColor: "rgba(29, 161, 242, 0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Twitter size={20} style={{ color: "#1DA1F2" }} />
              </Button>

              <Button
                component={Link}
                href="https://www.facebook.com/share/15G9XW3sk5/"
                target="_blank"
                variant="subtle"
                color="blue"
                p={0}
                aria-label="Facebook"
                className="social-button facebook"
                styles={{
                  root: {
                    "&:hover": {
                      backgroundColor: "rgba(66, 103, 178, 0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Facebook size={20} style={{ color: "#4267B2" }} />
              </Button>

              <Button
                component={Link}
                href="https://www.instagram.com/abu._zean?igsh=MXZ3bDNsaDdjMTVk"
                target="_blank"
                variant="subtle"
                color="pink"
                p={0}
                aria-label="Instagram"
                className="social-button instagram"
                styles={{
                  root: {
                    "&:hover": {
                      backgroundColor: "rgba(225, 48, 108, 0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Instagram size={20} style={{ color: "#E1306C" }} />
              </Button>

              <Button
                component={Link}
                href="https://github.com/Faisal-M-S-Abu-Zakari"
                target="_blank"
                variant="subtle"
                color="dark"
                p={0}
                aria-label="GitHub"
                className="social-button github"
                styles={{
                  root: {
                    "&:hover": {
                      backgroundColor: "rgba(36, 41, 46, 0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Github size={20} style={{ color: "#24292E" }} />
              </Button>

              <Button
                component={Link}
                href="https://www.linkedin.com/in/faisal-zakari"
                target="_blank"
                variant="subtle"
                color="blue"
                p={0}
                aria-label="LinkedIn"
                className="social-button linkedin"
                styles={{
                  root: {
                    "&:hover": {
                      backgroundColor: "rgba(0, 119, 181, 0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.2s ease",
                  },
                }}
              >
                <Linkedin size={20} style={{ color: "#0077B5" }} />
              </Button>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Title order={4} mb="md">
              Categories
            </Title>
            <Stack gap="xs">
              {[
                "Development",
                "Design",
                "Technology",
                "Career",
                "Tutorials",
              ].map((category) => (
                <Text
                  key={category}
                  component={Link}
                  href="#"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  {category}
                </Text>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Title order={4} mb="md">
              Quick Links
            </Title>
            <Stack gap="xs">
              {["Home", "Blog", "About", "Contact", "Privacy Policy"].map(
                (link) => (
                  <Text
                    key={link}
                    component={Link}
                    href="#"
                    c="dimmed"
                    style={{ textDecoration: "none" }}
                  >
                    {link}
                  </Text>
                )
              )}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Title order={4} mb="md">
              Subscribe
            </Title>
            <Text c="dimmed" mb="md">
              Subscribe to our newsletter to get the latest updates.
            </Text>
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="xs">
                <TextInput
                  placeholder="Your email"
                  {...form.getInputProps("email")}
                />
                <Button
                  type="submit"
                  fullWidth
                  style={{
                    background: `linear-gradient(to right, ${theme.colors.purple[6]}, ${theme.colors.pink[6]})`,
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </form>
          </Grid.Col>
        </Grid>

        <Box
          mt="xl"
          pt="xl"
          className="footer-border"
          style={{
            borderTop: `1px solid ${theme.colors.gray[2]}`,
          }}
        >
          <Text ta="center" c="dimmed">
            © 2025 Faisal's Blogs. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
