type BorderColor = 'default' | 'primary' | 'none';
type BorderRadius = 'md' | 'lg' | 'xl';
export interface Props {
    borderColor?: BorderColor;
    borderRadius?: BorderRadius;
    classRoot?: any;
    classContainer?: any;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'container-before'?(_: {}): any;
        default?(_: {}): any;
        header?(_: {}): any;
        body?(_: {}): any;
        footer?(_: {}): any;
        'container-after'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    borderColor: BorderColor;
    borderRadius: BorderRadius;
    classRoot: any;
    classContainer: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=CardRoot.vue.d.ts.map