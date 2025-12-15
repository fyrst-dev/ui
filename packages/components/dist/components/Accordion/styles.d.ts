export declare const accordion: import('../../../styled-system/types').SlotRecipeRuntimeFn<"root" | "content" | "item" | "trigger", {
    orientation: {
        horizontal: {
            root: {
                flexDirection: "row";
            };
        };
        vertical: {
            root: {
                flexDirection: "column";
            };
        };
    };
    size: {
        md: {
            root: {
                gap: "md";
            };
            item: {
                borderRadius: "lg";
            };
            trigger: {
                paddingY: "md";
                paddingX: "lg";
                gap: "md";
                fontSize: {
                    base: "md";
                };
                '& [data-trigger="icon"]': {
                    fontSize: {
                        base: "sm";
                        md: "md";
                    };
                };
            };
            content: {
                '& > div': {
                    padding: "lg";
                };
            };
        };
        lg: {
            root: {
                gap: "lg";
            };
            item: {
                borderRadius: "xl";
            };
            trigger: {
                paddingY: "lg";
                paddingX: "xl";
                gap: "lg";
                fontSize: {
                    base: "lg";
                };
                '& [data-trigger="icon"]': {
                    fontSize: {
                        base: "md";
                    };
                };
            };
            content: {
                '& > div': {
                    padding: "xl";
                };
            };
        };
    };
}>;
//# sourceMappingURL=styles.d.ts.map