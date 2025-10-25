import { default as FormInput } from './FormInput.vue';
import { default as FormPrompt } from './FormPrompt.vue';
export { FormInput, FormPrompt };
declare const _default: {
    Input: import('vue').DefineComponent<{
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
    Prompt: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./FormPrompt.vue').FormPromptProps> & Readonly<{
            onSubmit?: ((form: HTMLFormElement | null) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            submit: (form: HTMLFormElement | null) => any;
        }, import('vue').PublicProps, {
            placeholder: string;
            method: "get" | "post";
            ariaLabel: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            promptForm: HTMLFormElement;
        }, HTMLFormElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./FormPrompt.vue').FormPromptProps> & Readonly<{
            onSubmit?: ((form: HTMLFormElement | null) => any) | undefined;
        }>, {}, {}, {}, {}, {
            placeholder: string;
            method: "get" | "post";
            ariaLabel: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./FormPrompt.vue').FormPromptProps> & Readonly<{
        onSubmit?: ((form: HTMLFormElement | null) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        submit: (form: HTMLFormElement | null) => any;
    }, string, {
        placeholder: string;
        method: "get" | "post";
        ariaLabel: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            parameter?(_: {}): any;
            textarea?(_: {}): any;
            footer?(_: {}): any;
        };
    });
    PromptFooter: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            inputs?(_: {}): any;
            action?(_: {}): any;
        };
    });
};
export default _default;
//# sourceMappingURL=index.d.ts.map