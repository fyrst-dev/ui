import { default as FieldText } from './FieldText.vue';
import { default as FieldBase } from './FieldBase.vue';
import { default as FieldLabel } from './FieldLabel.vue';
export { FieldText, FieldBase, FieldLabel };
declare const _default: {
    Text: import('vue').DefineComponent<{
        label?: string | null;
        placeholder?: string | null;
        modelValue?: string | null;
        name?: string;
        id?: string;
        disabled?: boolean;
        required?: boolean;
        autocomplete?: string | null;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<{
        label?: string | null;
        placeholder?: string | null;
        modelValue?: string | null;
        name?: string;
        id?: string;
        disabled?: boolean;
        required?: boolean;
        autocomplete?: string | null;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        label: string | null;
        disabled: boolean;
        required: boolean;
        placeholder: string | null;
        modelValue: string | null;
        name: string;
        id: string;
        autocomplete: string | null;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    Base: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    Label: import('vue').DefineComponent<{
        label: string;
        for?: string;
        size?: "sm" | "md" | "lg";
        required?: boolean;
        disabled?: boolean;
        class?: any;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        label: string;
        for?: string;
        size?: "sm" | "md" | "lg";
        required?: boolean;
        disabled?: boolean;
        class?: any;
    }> & Readonly<{}>, {
        size: "sm" | "md" | "lg";
        disabled: boolean;
        class: any;
        for: string;
        required: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map