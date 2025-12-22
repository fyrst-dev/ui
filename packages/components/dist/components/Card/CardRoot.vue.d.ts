type BorderRadius = 'sm' | 'md' | 'lg' | 'xl';
export interface Props {
    colorStrategy?: 'default' | 'image';
    color?: 'default' | 'danger' | 'success' | 'warning' | 'info' | 'none';
    borderSize?: number;
    borderRadius?: BorderRadius;
    classRoot?: any;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        before?(_: {}): any;
        default?(_: {}): any;
        after?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    borderRadius: BorderRadius;
    color: "default" | "danger" | "success" | "warning" | "info" | "none";
    borderSize: number;
    classRoot: any;
    colorStrategy: "default" | "image";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=CardRoot.vue.d.ts.map