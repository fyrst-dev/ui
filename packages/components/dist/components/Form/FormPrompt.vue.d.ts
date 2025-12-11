export interface FormPromptProps {
    /** Action URL for the form submission */
    action: string;
    /** HTTP method for the form submission */
    method: 'get' | 'post';
    /** ID attribute for the form */
    id: string;
    /** Name attribute for the form */
    name: string;
    /** Accessible label for screen readers */
    ariaLabel?: string;
    /** Placeholder text for the textarea */
    placeholder?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        alert?(_: {}): any;
        parameter?(_: {}): any;
        textarea?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        promptForm: HTMLFormElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FormPromptProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    submit: (form: HTMLFormElement | null) => any;
}, string, import('vue').PublicProps, Readonly<FormPromptProps> & Readonly<{
    onSubmit?: ((form: HTMLFormElement | null) => any) | undefined;
}>, {
    ariaLabel: string;
    placeholder: string;
    method: "get" | "post";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    promptForm: HTMLFormElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=FormPrompt.vue.d.ts.map