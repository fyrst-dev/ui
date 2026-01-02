export interface ListItemProps {
    content?: string;
    size?: 'sm' | 'md' | 'lg';
    state?: 'default' | 'primary' | 'success' | 'danger' | 'info';
    icon?: string | boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        marker?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLIElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ListItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ListItemProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ListItem.vue.d.ts.map