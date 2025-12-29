import { Styles } from '../../../styled-system/css';
import { SystemStyleObject } from '@pandacss/dev';
type BorderRadius = "sm" | "md" | "lg" | "xl";
export interface Props {
    as?: "div" | "li";
    colorStrategy?: "default" | "image";
    color?: "default" | "primary" | "danger" | "success" | "warning" | "info" | "none" | "lucid-deep";
    borderSize?: number;
    borderRadius?: BorderRadius;
    borderColor?: string;
    classRoot?: Styles & SystemStyleObject;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        before?(_: {}): any;
        default?(_: {}): any;
        header?(_: {}): any;
        body?(_: {}): any;
        footer?(_: {}): any;
        after?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    borderRadius: BorderRadius;
    color: "default" | "primary" | "danger" | "success" | "warning" | "info" | "none" | "lucid-deep";
    borderSize: number;
    colorStrategy: "default" | "image";
    as: "div" | "li";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=CardRoot.vue.d.ts.map