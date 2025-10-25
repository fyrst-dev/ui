export interface Props {
    icon?: string;
    label?: string;
    ariaLabel?: string;
    classTrigger?: any;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {
            open: boolean;
        }): any;
        'trigger-label'?(_: {}): any;
        'trigger-icon'?(_: {
            open: boolean;
        }): any;
        dropdown?(_: {
            open: boolean;
        }): any;
        default?(_: {}): any;
    };
    refs: {
        el: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    el: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=FlyoutRoot.vue.d.ts.map