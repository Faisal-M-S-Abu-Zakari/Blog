"use client";

import Image from "next/image";
import {
  Button,
  Paper,
  TextInput,
  Textarea,
  Stack,
  Grid,
  Group,
  Container,
  Title,
  Text,
  Box,
  SimpleGrid,
} from "@mantine/core";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { teamMembers } from "@/constant/teamMembers";
import teamMemberImage from "@/public/team.avif";
export default function AboutPage() {
  return (
    <Container size="xl" py="xl">
      {/* Hero Section */}
      <Box mb="xl">
        <Stack align="center" mb="md">
          <Title order={1} ta="center">
            About Faisal's Blog
          </Title>
          <Text size="xl" c="dimmed" maw={600} ta="center">
            I'm a software engineer with a passion for building scalable and
            efficient systems. I'm currently working as a software engineer at
            Google and previously at Facebook.
          </Text>
        </Stack>

        <Box
          pos="relative"
          h={400}
          style={{
            borderRadius: "var(--mantine-radius-lg)",
            overflow: "hidden",
          }}
        >
          <Image
            src={teamMemberImage}
            alt="Faisal's Blog Team"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>

      {/* Our Story */}
      <Box mb="xl">
        <Stack maw={800} mx="auto">
          <Title order={2} mb="md">
            Our Story
          </Title>
          <Stack gap="md">
            <Text size="lg">
              Faisal's Blog was founded in 2025 with a simple mission: to
              provide high-quality, accessible content for developers at all
              stages of their journey. What started as a small personal blog has
              grown into a community of passionate writers and readers.
            </Text>
            <Text size="lg">
              We believe that knowledge should be shared openly and that the
              best way to learn is by teaching others. Our articles are written
              by developers who are actively working in the field, bringing
              real-world experience and practical insights to every piece of
              content.
            </Text>
            <Text size="lg">
              As technology continues to evolve at a rapid pace, we're committed
              to staying at the forefront, exploring new tools and techniques,
              and sharing our discoveries with our community.
            </Text>
          </Stack>
        </Stack>
      </Box>

      {/* Our Values */}
      <Box
        mb="xl"
        bg="var(--mantine-color-gray-0)"
        py="xl"
        px="md"
        style={{ borderRadius: "var(--mantine-radius-lg)" }}
      >
        <Stack maw={800} mx="auto">
          <Title order={2} ta="center" mb="lg">
            Our Values
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Paper p="md" withBorder>
              <Title order={3} mb="xs">
                Quality
              </Title>
              <Text c="dimmed">
                We prioritize accuracy, depth, and clarity in all our content,
                ensuring our readers receive the best information possible.
              </Text>
            </Paper>
            <Paper p="md" withBorder>
              <Title order={3} mb="xs">
                Accessibility
              </Title>
              <Text c="dimmed">
                We believe knowledge should be accessible to everyone,
                regardless of their background or experience level.
              </Text>
            </Paper>
            <Paper p="md" withBorder>
              <Title order={3} mb="xs">
                Community
              </Title>
              <Text c="dimmed">
                We foster an inclusive community where developers can learn,
                share, and grow together.
              </Text>
            </Paper>
          </SimpleGrid>
        </Stack>
      </Box>

      {/* Our Team */}
      <Box mb="xl">
        <Title order={2} ta="center" mb="lg">
          Meet Our Team
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
          {teamMembers.map((member) => (
            <Paper key={member.name} withBorder>
              <Box pos="relative" h={256}>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Stack p="md">
                <Title order={3}>{member.name}</Title>
                <Text fw={500} c="blue">
                  {member.role}
                </Text>
                <Text c="dimmed" mb="md">
                  {member.bio}
                </Text>
                <Group gap="xs">
                  <Button variant="subtle" size="sm" radius="xl">
                    <Twitter size={16} />
                  </Button>
                  <Button variant="subtle" size="sm" radius="xl">
                    <Linkedin size={16} />
                  </Button>
                  <Button variant="subtle" size="sm" radius="xl">
                    <Github size={16} />
                  </Button>
                </Group>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Box>

      {/* Contact Us */}
      <Box mb="xl">
        <Stack maw={800} mx="auto">
          <Title order={2} ta="center" mb="lg">
            Contact Us
          </Title>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack>
                <Title order={3} mb="md">
                  Get in Touch
                </Title>
                <Stack gap="md">
                  <Group>
                    <Mail
                      size={20}
                      style={{ color: "var(--mantine-color-blue-6)" }}
                    />
                    <div>
                      <Text fw={500}>Email</Text>
                      <Text c="dimmed">Faisal's-Blog@gmail.com</Text>
                    </div>
                  </Group>
                  <Group>
                    <Phone
                      size={20}
                      style={{ color: "var(--mantine-color-blue-6)" }}
                    />
                    <div>
                      <Text fw={500}>Phone</Text>
                      <Text c="dimmed">+970 599 123 456</Text>
                    </div>
                  </Group>
                  <Group>
                    <MapPin
                      size={20}
                      style={{ color: "var(--mantine-color-blue-6)" }}
                    />
                    <div>
                      <Text fw={500}>Address</Text>
                      <Text c="dimmed">
                        Palestine, Gaza
                        <br />
                        Palestine
                      </Text>
                    </div>
                  </Group>
                </Stack>
                <Box mt="md">
                  <Title order={3} mb="md">
                    Follow Us
                  </Title>
                  <Group gap="xs">
                    <Button variant="outline" radius="xl">
                      <Twitter size={20} />
                    </Button>
                    <Button variant="outline" radius="xl">
                      <Facebook size={20} />
                    </Button>
                    <Button variant="outline" radius="xl">
                      <Instagram size={20} />
                    </Button>
                    <Button variant="outline" radius="xl">
                      <Github size={20} />
                    </Button>
                    <Button variant="outline" radius="xl">
                      <Linkedin size={20} />
                    </Button>
                  </Group>
                </Box>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack>
                <Title order={3} mb="md">
                  Send Us a Message
                </Title>
                <form>
                  <Stack gap="md">
                    <Grid>
                      <Grid.Col span={6}>
                        <TextInput
                          label="Name"
                          placeholder="Your name"
                          required
                        />
                      </Grid.Col>
                      <Grid.Col span={6}>
                        <TextInput
                          label="Email"
                          placeholder="Your email"
                          type="email"
                          required
                        />
                      </Grid.Col>
                    </Grid>
                    <TextInput
                      label="Subject"
                      placeholder="Message subject"
                      required
                    />
                    <Textarea
                      label="Message"
                      placeholder="Your message"
                      minRows={5}
                      required
                    />
                    <Button type="submit" fullWidth>
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Grid.Col>
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}
