type __VLS_Props = {
    type?: 'text' | 'email' | 'tel';
    modelValue?: string | null;
    id?: string;
    name?: string;
    placeholder?: string | null;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string | null;
    size?: 'sm' | 'md' | 'lg';
    invalid?: boolean;
    class?: any;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    type: "text" | "email" | "tel";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    class: any;
    id: string;
    required: boolean;
    modelValue: string | null;
    name: string;
    placeholder: string | null;
    autocomplete: string | null;
    invalid: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLInputElement>;
export default _default;
//# sourceMappingURL=InputText.vue.d.ts.map