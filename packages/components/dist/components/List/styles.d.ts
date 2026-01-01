import { InjectionKey, ComputedRef } from 'vue';
export type ListStyles = ReturnType<typeof listStyles.raw>;
export declare const ListStylesKey: InjectionKey<ComputedRef<ListStyles>>;
export declare const listStyles: import('../../../styled-system/types').SlotRecipeRuntimeFn<"marker" | "item" | "list", {
    size: {
        sm: {
            list: {
                gap: "xs";
            };
            item: {
                fontSize: "sm";
                gap: "sm";
            };
            marker: {
                width: "16px";
                height: "16px";
                minWidth: "16px";
                marginTop: "2px";
            };
        };
        md: {
            list: {
                gap: "xs";
            };
            item: {
                fontSize: "md";
                gap: "sm";
            };
            marker: {
                width: "20px";
                height: "20px";
                minWidth: "20px";
                marginTop: "1px";
            };
        };
        lg: {
            list: {
                gap: "xs";
            };
            item: {
                fontSize: "lg";
                gap: "sm";
            };
            marker: {
                width: "20px";
                height: "20px";
                minWidth: "20px";
                marginTop: "6px";
            };
        };
    };
}>;
//# sourceMappingURL=styles.d.ts.map