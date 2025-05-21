"use client";
import Link from "next/link";
import { Pencil } from "lucide-react";
import {
  AppShell,
  Container,
  Group,
  Button,
  Text,
  UnstyledButton,
  Avatar,
  Menu,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Session } from "next-auth";

interface NavbarProps {
  session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const mainLinks = [
    { link: "/", label: "Home" },
    { link: "/blog", label: "Blog" },
    { link: "/about", label: "About" },
  ];

  return (
    <AppShell
      header={{ height: 70 }}
      styles={{
        header: {
          position: "fixed",
          top: 0,
          zIndex: 1000,
        },
        main: {
          paddingTop: 70,
        },
      }}
    >
      <AppShell.Header>
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Text
                size="xl"
                fw={700}
                variant="gradient"
                gradient={{ from: "purple", to: "pink", deg: 90 }}
              >
                Faisal's Blog
              </Text>
            </Link>

            {/* Desktop Navigation */}
            <Group gap="md" visibleFrom="md">
              {mainLinks.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Text fw={500} size="sm">
                    {link.label}
                  </Text>
                </Link>
              ))}
            </Group>

            <Group gap="sm" visibleFrom="md">
              {session?.user ? (
                <>
                  <Link href="/blog/create">
                    <Button
                      variant="outline"
                      size="sm"
                      leftSection={<Pencil size={16} />}
                    >
                      Write
                    </Button>
                  </Link>
                  <Menu
                    position="bottom-end"
                    withinPortal
                    styles={{ dropdown: { zIndex: 1000, minWidth: "200px" } }}
                  >
                    <Menu.Target>
                      <UnstyledButton>
                        <Avatar
                          size="md" // Increased from "sm" to "lg" for a larger avatar
                          radius="md"
                          src={session.user.image || undefined}
                        />
                      </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Label
                        style={{ fontSize: "1.2rem", padding: "12px" }}
                      >
                        {session.user.name}
                      </Menu.Label>
                      <Menu.Divider />
                      <Link href="/dashboard">
                        <Menu.Item
                          style={{ fontSize: "1.1rem", padding: "10px 15px" }}
                        >
                          Dashboard
                        </Menu.Item>
                      </Link>
                      <Link href="/blog/create">
                        <Menu.Item
                          style={{ fontSize: "1.1rem", padding: "10px 15px" }}
                        >
                          Create Post
                        </Menu.Item>
                      </Link>
                      <Link href="/profile">
                        <Menu.Item
                          style={{ fontSize: "1.1rem", padding: "10px 15px" }}
                        >
                          Profile
                        </Menu.Item>
                      </Link>
                      <Link href="/settings">
                        <Menu.Item
                          style={{ fontSize: "1.1rem", padding: "10px 15px" }}
                        >
                          Settings
                        </Menu.Item>
                      </Link>
                      <Menu.Divider />
                      <Menu.Item
                        component="a"
                        href="/api/auth/signout"
                        style={{ fontSize: "1.1rem", padding: "10px 15px" }}
                      >
                        Log out
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="subtle" color="purple">
                      Sign in
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button color="purple">Sign up</Button>
                  </Link>
                </>
              )}
            </Group>

            {/* Mobile Navigation */}
            <Group gap="sm" hiddenFrom="md">
              <Burger opened={drawerOpened} onClick={toggleDrawer} />
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="md"
        zIndex={1000}
      >
        <Stack gap="md">
          {mainLinks.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={closeDrawer}
            >
              <Text fw={500} size="sm" py="xs">
                {link.label}
              </Text>
            </Link>
          ))}

          <Stack gap="xs" mt="md">
            {session?.user ? (
              <>
                <Link href="/blog/create">
                  <Button
                    fullWidth
                    leftSection={<Pencil size={16} />}
                    onClick={closeDrawer}
                  >
                    Write a Post
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button variant="outline" fullWidth onClick={closeDrawer}>
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  fullWidth
                  component="a"
                  href="/api/auth/signout"
                  onClick={closeDrawer}
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <Button fullWidth color="purple" onClick={closeDrawer}>
                    Sign up
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    variant="subtle"
                    color="purple"
                    fullWidth
                    onClick={closeDrawer}
                  >
                    Sign in
                  </Button>
                </Link>
              </>
            )}
          </Stack>
        </Stack>
      </Drawer>
    </AppShell>
  );
}
