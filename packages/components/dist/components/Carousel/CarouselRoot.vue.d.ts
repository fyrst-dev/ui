import { PropType } from 'vue';
import { Styles } from '../../../styled-system/css';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'carousel-before'?(_: {}): any;
        default?(_: {}): any;
        'carousel-after'?(_: {}): any;
    };
    refs: {
        carousel: HTMLUListElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    scrollMode: {
        type: PropType<"item" | "viewport">;
        default: string;
        validator: (value: string) => boolean;
    };
    classWrapper: {
        type: PropType<Styles>;
        default: null;
    };
    classCarousel: {
        type: PropType<Styles>;
        default: null;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    scrollMode: {
        type: PropType<"item" | "viewport">;
        default: string;
        validator: (value: string) => boolean;
    };
    classWrapper: {
        type: PropType<Styles>;
        default: null;
    };
    classCarousel: {
        type: PropType<Styles>;
        default: null;
    };
}>> & Readonly<{}>, {
    scrollMode: "item" | "viewport";
    classWrapper: Styles;
    classCarousel: Styles;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    carousel: HTMLUListElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=CarouselRoot.vue.d.ts.map