import { default as FieldText } from './FieldText.vue';
import { default as FieldBase } from './FieldBase.vue';
import { default as FieldLabel } from './FieldLabel.vue';
import { default as FieldError } from './FieldError.vue';
import { default as FieldMessage } from './FieldMessage.vue';
export { FieldText, FieldBase, FieldLabel, FieldError, FieldMessage };
declare const _default: {
    Text: import('vue').DefineComponent<{
        name: string | undefined;
        type: "text" | "email" | "tel";
        label?: string | null;
        placeholder?: string | null;
        modelValue?: string | null;
        id?: string;
        disabled?: boolean;
        required?: boolean;
        autocomplete?: string | null;
        message?: string | null;
        error?: string | null;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: string) => any;
    }, string, import('vue').PublicProps, Readonly<{
        name: string | undefined;
        type: "text" | "email" | "tel";
        label?: string | null;
        placeholder?: string | null;
        modelValue?: string | null;
        id?: string;
        disabled?: boolean;
        required?: boolean;
        autocomplete?: string | null;
        message?: string | null;
        error?: string | null;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    }>, {
        label: string | null;
        type: "text" | "email" | "tel";
        disabled: boolean;
        id: string;
        error: string | null;
        message: string | null;
        required: boolean;
        modelValue: string | null;
        name: string | undefined;
        placeholder: string | null;
        autocomplete: string | null;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    Base: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            id?: string;
            error?: string | null;
            message?: string | null;
            class?: any;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            class: any;
            id: string;
            error: string | null;
            message: string | null;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            id?: string;
            error?: string | null;
            message?: string | null;
            class?: any;
        }> & Readonly<{}>, {}, {}, {}, {}, {
            class: any;
            id: string;
            error: string | null;
            message: string | null;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        id?: string;
        error?: string | null;
        message?: string | null;
        class?: any;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        class: any;
        id: string;
        error: string | null;
        message: string | null;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
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
    Error: import('vue').DefineComponent<{
        message?: string | null;
        id?: string;
        class?: any;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        message?: string | null;
        id?: string;
        class?: any;
    }> & Readonly<{}>, {
        class: any;
        id: string;
        message: string | null;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    Message: import('vue').DefineComponent<{
        message?: string | null;
        id?: string;
        class?: any;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        message?: string | null;
        id?: string;
        class?: any;
    }> & Readonly<{}>, {
        class: any;
        id: string;
        message: string | null;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map