import { InjectionKey, ComputedRef } from 'vue';
export type CardStyles = ReturnType<typeof cardStyles.raw>;
export declare const CardStylesKey: InjectionKey<ComputedRef<CardStyles>>;
export declare const cardStyles: import('../../../styled-system/types').SlotRecipeRuntimeFn<"root" | "body" | "footer" | "header" | "headerBody" | "headerTitle" | "headerSubtitle", {
    colorStrategy: {
        default: {
            root: {
                background: "var(--card-bg-overlay) padding-box, var(--card-bg) padding-box";
                borderColor: "var(--card-border-color)";
            };
        };
        image: {
            root: {
                background: "var(--card-bg-overlay) padding-box, var(--card-bg) padding-box, var(--card-border-color) border-box";
            };
        };
    };
    color: {
        none: {
            root: {
                "--card-bg": "transparent";
                "--card-border-color": "transparent";
            };
        };
        default: {
            root: {
                "--card-bg": "linear-gradient(token(colors.grey.deep))";
                "--card-border-color": "token(colors.grey.700)";
                _light: {
                    "--card-bg": "linear-gradient(token(colors.white))";
                    "--card-border-color": "token(colors.grey.100)";
                };
            };
        };
        primary: {
            root: {
                "--card-bg": "linear-gradient(var(--colors-primary-lucid-900))";
            };
        };
        danger: {
            root: {
                "--card-bg": "linear-gradient(var(--colors-danger-lucid-900))";
            };
        };
        success: {
            root: {
                "--card-bg": "linear-gradient(var(--colors-success-lucid-900))";
            };
        };
        warning: {
            root: {
                "--card-bg": "linear-gradient(var(--colors-warning-lucid-900))";
            };
        };
        info: {
            root: {
                "--card-bg": "linear-gradient(var(--colors-info-lucid-900))";
            };
        };
        'lucid-deep': {
            root: {
                "--card-bg": "linear-gradient(rgb(from token(colors.black) r g b / 10%))";
            };
        };
    };
    padding: {
        md: {
            header: {
                padding: "xl";
                gap: "md";
            };
            body: {
                padding: "xl";
            };
        };
    };
    borderRadius: {
        sm: {
            root: {
                borderRadius: "lg";
            };
        };
        md: {
            root: {
                borderRadius: "xl";
            };
        };
        lg: {
            root: {
                borderRadius: "2xl";
            };
        };
        xl: {
            root: {
                borderRadius: "4xl";
            };
        };
    };
}>;
//# sourceMappingURL=styles.d.ts.map