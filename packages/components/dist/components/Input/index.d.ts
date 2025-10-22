import { default as InputText } from './InputText.vue';
export { InputText };
declare const _default: {
    Text: import('vue').DefineComponent<{
        type?: "text" | "email" | "tel";
        modelValue?: string | null;
        id?: string;
        name?: string;
        placeholder?: string | null;
        disabled?: boolean;
        required?: boolean;
        autocomplete?: string | null;
        size?: "sm" | "md" | "lg";
        invalid?: boolean;
        class?: any;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<{
        type?: "text" | "email" | "tel";
        modelValue?: string | null;
        id?: string;
        name?: string;
        placeholder?: string | null;
        disabled?: boolean;
        required?: boolean;
        autocomplete?: string | null;
        size?: "sm" | "md" | "lg";
        invalid?: boolean;
        class?: any;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        type: "text" | "email" | "tel";
        size: "sm" | "md" | "lg";
        disabled: boolean;
        class: any;
        required: boolean;
        placeholder: string | null;
        modelValue: string | null;
        name: string;
        id: string;
        autocomplete: string | null;
        invalid: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLInputElement>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map