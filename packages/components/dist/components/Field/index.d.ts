import { default as FieldText } from './FieldText.vue';
import { default as FieldBase } from './FieldBase.vue';
export { FieldText, FieldBase };
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
        placeholder: string | null;
        modelValue: string | null;
        name: string;
        id: string;
        required: boolean;
        autocomplete: string | null;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    Base: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map