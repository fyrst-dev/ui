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
        valid?: true | false | "none";
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
        valid?: true | false | "none";
        class?: any;
    }> & Readonly<{
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
        valid: true | false | "none";
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLInputElement>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map