import { default as AccordionRoot } from './AccordionRoot.vue';
export { AccordionRoot };
export type { AccordionItem } from './types';
declare const _default: {
    Root: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            type?: "single" | "multiple";
            orientation?: "vertical" | "horizontal";
            size?: "md";
            items: import('./types').AccordionItem[];
            classes?: any;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: "md";
            type: "single" | "multiple";
            classes: any;
            orientation: "vertical" | "horizontal";
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            type?: "single" | "multiple";
            orientation?: "vertical" | "horizontal";
            size?: "md";
            items: import('./types').AccordionItem[];
            classes?: any;
        }> & Readonly<{}>, {}, {}, {}, {}, {
            size: "md";
            type: "single" | "multiple";
            classes: any;
            orientation: "vertical" | "horizontal";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        type?: "single" | "multiple";
        orientation?: "vertical" | "horizontal";
        size?: "md";
        items: import('./types').AccordionItem[];
        classes?: any;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        size: "md";
        type: "single" | "multiple";
        classes: any;
        orientation: "vertical" | "horizontal";
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {
                item: import('./types').AccordionItem;
            }): any;
            content?(_: {
                item: import('./types').AccordionItem;
            }): any;
        };
    });
};
export default _default;
//# sourceMappingURL=index.d.ts.map