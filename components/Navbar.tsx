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

export default function Navbar() {
  const user = null; // Set to null to show login/signup buttons
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const mainLinks = [
    { link: "/", label: "Home" },
    { link: "/blog", label: "Blog" },
    // { link: "/categories", label: "Categories" },
    { link: "/about", label: "About" },
    // { link: "/contact", label: "Contact" },
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
              {/* <ActionIcon
                variant="subtle"
                size="lg"
                onClick={() => toggleColorScheme()}
                color="purple"
              >
                {colorScheme === "dark" ? (
                  <IconSun size={20} />
                ) : (
                  <IconMoon size={20} />
                )}
              </ActionIcon> */}

              {user ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    leftSection={<Pencil size={16} />}
                    component={Link}
                    href="/blog/create"
                  >
                    Write
                  </Button>

                  <Menu position="bottom-end" withinPortal>
                    <Menu.Target>
                      <UnstyledButton>
                        <Avatar size="sm" radius="xl" />
                      </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Label>My Account</Menu.Label>
                      <Menu.Divider />
                      <Menu.Item component={Link} href="/dashboard">
                        Dashboard
                      </Menu.Item>
                      <Menu.Item component={Link} href="/blog/create">
                        Create Post
                      </Menu.Item>
                      <Menu.Item component={Link} href="/profile">
                        Profile
                      </Menu.Item>
                      <Menu.Item component={Link} href="/settings">
                        Settings
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item>Log out</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </>
              ) : (
                <>
                  <Button
                    variant="subtle"
                    color="purple"
                    component={Link}
                    href="/login"
                  >
                    Sign in
                  </Button>
                  <Button color="purple" component={Link} href="/signup">
                    Sign up
                  </Button>
                </>
              )}
            </Group>

            {/* Mobile Navigation */}
            <Group gap="sm" hiddenFrom="md">
              {/* 
              <ActionIcon
                variant="subtle"
                size="lg"
                onClick={() => toggleColorScheme()}
                color="purple"
              >
                {colorScheme === "dark" ? (
                  <IconSun size={20} />
                ) : (
                  <IconMoon size={20} />
                )}
              </ActionIcon> */}

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
            {user ? (
              <>
                <Button
                  fullWidth
                  leftSection={<Pencil size={16} />}
                  component={Link}
                  href="/blog/create"
                  onClick={closeDrawer}
                >
                  Write a Post
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  component={Link}
                  href="/profile"
                >
                  Profile
                </Button>
                <Button variant="outline" fullWidth>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button
                  fullWidth
                  color="purple"
                  component={Link}
                  href="/signup"
                  onClick={closeDrawer}
                >
                  Sign up
                </Button>
                <Button
                  variant="subtle"
                  color="purple"
                  fullWidth
                  component={Link}
                  href="/login"
                  onClick={closeDrawer}
                >
                  Sign in
                </Button>
              </>
            )}
          </Stack>
        </Stack>
      </Drawer>
    </AppShell>
  );
}
