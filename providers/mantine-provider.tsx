import {
  createTheme,
  DirectionProvider,
  MantineColorsTuple,
  MantineProvider,
  rem,
} from "@mantine/core";
import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Notifications } from "@mantine/notifications";

const primary: MantineColorsTuple = [
  "#EFF6FF",
  "#DBEAFE",
  "#BFDBFE",
  "#93C5FD",
  "#60A5FA",
  "#3B82F6",
  "#2563EB",
  "#1D4ED8",
  "#1E40AF",
  "#1E3A8A",
] as const;
const secondary: MantineColorsTuple = [
  "#FEF3C7",
  "#FDE68A",
  "#FCD34D",
  "#FBBF24",
  "#F59E0B",
  "#D97706",
  "#B45309",
  "#92400E",
  "#78350F",
  "#451A03",
] as const;

const text: MantineColorsTuple = [
  "#F8FAFC",
  "#F1F5F9",
  "#E2E8F0",
  "#CBD5E1",
  "#94A3B8",
  "#64748B",
  "#475569",
  "#334155",
  "#1E293B",
  "#0F172A",
] as const;

const accent: MantineColorsTuple = [
  "#F0FDF4",
  "#DCFCE7",
  "#BBF7D0",
  "#86EFAC",
  "#4ADE80",
  "#22C55E",
  "#16A34A",
  "#15803D",
  "#166534",
  "#14532D",
] as const;

const purple: MantineColorsTuple = [
  "#FAF5FF",
  "#F3E8FF",
  "#E9D5FF",
  "#D8B4FE",
  "#C084FC",
  "#A855F7",
  "#9333EA",
  "#7E22CE",
  "#6B21A8",
  "#581C87",
] as const;

const pink: MantineColorsTuple = [
  "#fdf2f8",
  "#fce7f3",
  "#fbcfe8",
  "#f9a8d4",
  "#f472b6",
  "#ec4899",
  "#db2777",
  "#be185d",
  "#9d174d",
  "#831843",
] as const;

export const theme = createTheme({
  black: "#2B261E",
  breakpoints: {
    xs: "450px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  colors: {
    primary,
    secondary,
    text,
    accent,
    purple,
    pink,
  },

  // fontFamilyMonospace: "Monaco, Courier, monospace",
  primaryColor: "primary",
  radius: {
    sm: "0.35rem",
    md: "0.55rem",
    lg: "0.8rem",
    xl: "1rem",
  },

  components: {
    Divider: {
      defaultProps: {
        color: "#DFDEDC",
      },
    },
    Badge: {
      defaultProps: {
        size: "lg",
        radius: "xl",
        fw: 600,
        variant: "light",
        style: {
          textTransform: "capitalize",
        },
      },
    },
    Menu: {
      defaultProps: {
        shadow: "lg",
      },
    },
    Input: {
      defaultProps: {
        size: "md",
        fw: 500,
        c: "primary",
        classNames: {
          input: '[type="tel"]:!text-left placeholder:text-sm ',
        },
      },
    },

    Select: {
      defaultProps: {
        size: "md",
        fw: 500,
        rightSection: <ChevronDown size={12} />,
        classNames: {
          input: " placeholder:text-sm",
        },
        labelProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },

    TextInput: {
      defaultProps: {
        size: "md",
        classNames: {
          input: " placeholder:text-sm",
        },

        labelProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },
    TagsInput: {
      defaultProps: {
        size: "md",
        classNames: {
          inputField: " placeholder:text-sm",
        },

        labelProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },
    NumberInput: {
      defaultProps: {
        size: "md",
        classNames: {
          input: " placeholder:text-sm",
        },

        labelProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },

    Button: {
      defaultProps: {
        fw: 500,
        size: "md",
      },
    },

    RadioGroup: {
      defaultProps: {
        labelProps: {
          fw: 500,
        },
      },
    },
    Radio: {
      defaultProps: {
        fw: 600,
        c: "#817C74",
      },
    },
  },

  defaultRadius: "md",
  fontSizes: {
    xs: rem(11),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
    "2xl": rem(28),
  },
  headings: {
    fontWeight: "600",
    sizes: {
      h1: {
        fontSize: rem(36),
      },
      h2: {
        fontSize: rem(30),
      },
    },
  },
});

interface Props {
  children: ReactNode;
}
export default function Mantine_Provider({ children }: Props) {
  return (
    <DirectionProvider detectDirection>
      <MantineProvider theme={theme}>
        <Notifications />
        <> {children}</>
      </MantineProvider>
    </DirectionProvider>
  );
}
