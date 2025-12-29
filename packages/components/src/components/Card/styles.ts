import { sva } from "styled-system/css";
import type { InjectionKey, ComputedRef } from "vue";

export type CardStyles = ReturnType<typeof cardStyles.raw>;
export const CardStylesKey: InjectionKey<ComputedRef<CardStyles>> = Symbol("CardStyles");

export const cardStyles = sva({
  slots: ["root", "header", "headerBody", "headerTitle", "headerSubtitle", "body", "footer"],
  base: {
    root: {
      color: "neutral",
      display: "block",
      borderWidth: "var(--card-border-size)",
      borderStyle: "solid",
      borderColor: "transparent",
      position: "relative",
      zIndex: "1",
      maxWidth: "100%",
      backdropBlur: "8px",
      backdropFilter: "auto",
      boxShadow: "var(--card-shadow)",
      "--card-bg-overlay": "linear-gradient(transparent)",
    },
    header: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      borderBottomWidth: "var(--card-border-size)",
      borderStyle: "solid",
      borderColor: "grey.700"
    },
    headerBody: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
    },
    headerTitle: {
      fontWeight: "700",
      fontSize: "lg",
      lineHeight: "1.25"
    },
    headerSubtitle: {
      color: "grey.dawn",
      fontSize: "md",
    }
  },
  variants: {
    colorStrategy: {
      default: {
        root: {
          background: "var(--card-bg-overlay) padding-box, var(--card-bg) padding-box",
          borderColor: "var(--card-border-color)",
        },
      },
      image: {
        root: {
          background:
            "var(--card-bg-overlay) padding-box, var(--card-bg) padding-box, var(--card-border-color) border-box",
        },
      },
    },
    color: {
      none: {
        root: {
          "--card-bg": "transparent",
          "--card-border-color": "transparent",
        },
      },
      default: {
        root: {
          "--card-bg": "linear-gradient(token(colors.grey.deep))",
          "--card-border-color": "token(colors.grey.700)",
          _light: {
            "--card-bg": "linear-gradient(token(colors.grey.50))",
            "--card-border-color": "token(colors.grey.100)",
          }
        },
      },
      primary: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-primary-lucid-900))",
        },
      },
      danger: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-danger-lucid-900))",
        },
      },
      success: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-success-lucid-900))",
        },
      },
      warning: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-warning-lucid-900))",
        },
      },
      info: {
        root: {
          "--card-bg": "linear-gradient(var(--colors-info-lucid-900))",
        },
      },
      'lucid-deep': {
        root: {
          "--card-bg": "linear-gradient(rgb(from token(colors.black) r g b / 10%))",
        },
      }
    },
    padding: {
      md: {
        header: {
          padding: "xl",
          gap: "md",
        },
        body: {
          padding: "xl",
        }
      }
    },
    borderRadius: {
      sm: {
        root: {
          borderRadius: "lg",
        },
      },
      md: {
        root: {
          borderRadius: "xl",
        },
      },
      lg: {
        root: {
          borderRadius: "2xl",
        },
      },
      xl: {
        root: {
          borderRadius: "4xl",
        },
      },
    },
  },
  defaultVariants: {
    borderRadius: "md",
    color: "default",
    padding: "md",
    colorStrategy: "default",
  },
});
