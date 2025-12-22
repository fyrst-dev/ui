import { sva } from "styled-system/css"

export const heroLead = sva({
  slots: ["root", "headline", "description", "actions"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      marginX: "auto",
    },
    headline: {
      textWrap: "balance",
      fontWeight: "750",
      transition: "all 200ms",
      "& mark, & strong": {
        color: "primary",
      },
    },
    description: {
      color: "grey.dawn",
      textWrap: "balance",
      transition: "all 200ms",
      "& mark, & strong, & a": {
        color: "neutral",
      },
      _light: {
        color: "grey.400",
      },
    },
  },
  variants: {
    alignItems: {
      start: {
        root: {
          alignItems: "start",
          textAlign: "start",
        },
      },
      center: {
        root: {
          alignItems: "center",
          textAlign: "center",
        },
      },
      end: {
        root: {
          alignItems: "end",
          textAlign: "end",
        },
      },
    },
    alignSelf: {
      start: {
        root: {
          alignSelf: "start",
        },
      },
      center: {
        root: {
          alignSelf: "center",
        },
      },
      end: {
        root: {
          alignSelf: "end",
        },
      },
    },
    size: {
      sm: {
        root: {
            gap: "md"
        },
        headline: {
          fontSize: {
            base: "xl",
            xl: "2xl",
          },
          lineHeight: "1.25",
        },
        description: {
          fontSize: {
            base: "sm",
            md: "md",
          },
        },
      },
      md: {
        root: {
            gap: "lg"
        },
        headline: {
          fontSize: {
            base: "2xl",
            xl: "3xl",
          },
          lineHeight: "1.25",
        },
        description: {
          fontSize: {
            base: "md",
            md: "lg",
          },
        },
      },
      lg: {
        root: {
            gap: "xl"
        },
        headline: {
          fontSize: {
            base: "2xl",
            md: "4xl",
            "2xl": "5xl",
          },
          lineHeight: "1.1",
        },
        description: {
          fontSize: {
            base: "md",
            md: "lg",
            "2xl": "xl",
          },
          lineHeight: "1.75",
        },
      },
    },
  },
})