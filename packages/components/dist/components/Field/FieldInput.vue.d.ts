type __VLS_Props = {
    name: string | undefined;
    type: 'text' | 'email' | 'tel';
    label?: string | null;
    placeholder?: string | null;
    modelValue?: string | null;
    id?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: string | null;
    message?: string | null;
    error?: string | null;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    label: string | null;
    type: "text" | "email" | "tel";
    disabled: boolean;
    error: string | null;
    name: string | undefined;
    placeholder: string | null;
    id: string;
    message: string | null;
    required: boolean;
    modelValue: string | null;
    autocomplete: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=FieldInput.vue.d.ts.map