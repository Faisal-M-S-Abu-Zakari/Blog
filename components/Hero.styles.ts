export const useStyles = {
  hero: {
    background:
      "linear-gradient(135deg, var(--mantine-color-purple-6) 0%, var(--mantine-color-pink-6) 100%)",
    color: "var(--mantine-color-white)",
  },

  title: {
    fontSize: "calc(var(--mantine-font-size-xl) * 3)",
    fontWeight: 900,
    letterSpacing: -1,
    marginBottom: "var(--mantine-spacing-md)",
    "@media (maxWidth: 48em)": {
      fontSize: "calc(var(--mantine-font-size-xl) * 2)",
    },
  },

  description: {
    opacity: 0.9,
    maxWidth: 600,
    marginBottom: "var(--mantine-spacing-xl)",
  },

  primaryButton: {
    backgroundColor: "var(--mantine-color-white)",
    color: "var(--mantine-color-purple-6)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "var(--mantine-color-purple-7)",
    },
  },

  secondaryButton: {
    borderColor: "var(--mantine-color-white)",
    color: "var(--mantine-color-white)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  },

  searchInput: {
    width: "100%",
  },
};
