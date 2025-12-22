export declare const cardStyles: import('../../../styled-system/types').SlotRecipeRuntimeFn<"root", {
    colorStrategy: {
        default: {
            root: {
                backgroundImage: "var(--card-bg)";
                borderColor: "var(--card-border-color)";
            };
        };
        image: {
            root: {
                background: "var(--card-bg) padding-box, var(--card-border-color) border-box";
            };
        };
    };
    color: {
        none: {
            root: {
                '--card-bg': "transparent";
                '--card-border-color': "transparent";
            };
        };
        default: {
            root: {
                '--card-bg': "linear-gradient(var(--colors-grey-deep))";
            };
        };
        danger: {
            root: {
                '--card-bg': "linear-gradient(var(--colors-danger-lucid-900))";
            };
        };
        success: {
            root: {
                '--card-bg': "linear-gradient(var(--colors-success-lucid-900))";
            };
        };
        warning: {
            root: {
                '--card-bg': "linear-gradient(var(--colors-warning-lucid-900))";
            };
        };
        info: {
            root: {
                '--card-bg': "linear-gradient(var(--colors-info-lucid-900))";
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