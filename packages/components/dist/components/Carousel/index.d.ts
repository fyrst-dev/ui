import { default as CarouselRoot } from './CarouselRoot.vue';
import { default as CarouselItem } from './CarouselItem.vue';
import { default as CarouselNavigation } from './CarouselNavigation.vue';
export { CarouselRoot, CarouselItem, CarouselNavigation };
declare const _default: {
    Root: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            scrollMode: {
                type: import('vue').PropType<"item" | "viewport">;
                default: string;
                validator: (value: string) => boolean;
            };
            classWrapper: {
                type: import('vue').PropType<import('../../../styled-system/css').Styles>;
                default: null;
            };
            classCarousel: {
                type: import('vue').PropType<import('../../../styled-system/css').Styles>;
                default: null;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            classWrapper: import('../../../styled-system/css').Styles;
            scrollMode: "item" | "viewport";
            classCarousel: import('../../../styled-system/css').Styles;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            carousel: HTMLUListElement;
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            scrollMode: {
                type: import('vue').PropType<"item" | "viewport">;
                default: string;
                validator: (value: string) => boolean;
            };
            classWrapper: {
                type: import('vue').PropType<import('../../../styled-system/css').Styles>;
                default: null;
            };
            classCarousel: {
                type: import('vue').PropType<import('../../../styled-system/css').Styles>;
                default: null;
            };
        }>> & Readonly<{}>, {}, {}, {}, {}, {
            classWrapper: import('../../../styled-system/css').Styles;
            scrollMode: "item" | "viewport";
            classCarousel: import('../../../styled-system/css').Styles;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
        scrollMode: {
            type: import('vue').PropType<"item" | "viewport">;
            default: string;
            validator: (value: string) => boolean;
        };
        classWrapper: {
            type: import('vue').PropType<import('../../../styled-system/css').Styles>;
            default: null;
        };
        classCarousel: {
            type: import('vue').PropType<import('../../../styled-system/css').Styles>;
            default: null;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        classWrapper: import('../../../styled-system/css').Styles;
        scrollMode: "item" | "viewport";
        classCarousel: import('../../../styled-system/css').Styles;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            'carousel-before'?(_: {}): any;
            default?(_: {}): any;
            'carousel-after'?(_: {}): any;
        };
    });
    Item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLIElement, import('vue').ComponentProvideOptions, {
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
            default?(_: {}): any;
        };
    });
    Navigation: {
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
            'action-prev'?(_: {
                handlePrev: (() => void) | undefined;
                disabled: boolean;
            }): any;
            'action-next'?(_: {
                handleNext: (() => void) | undefined;
                disabled: boolean;
            }): any;
        };
    });
};
export default _default;
//# sourceMappingURL=index.d.ts.map