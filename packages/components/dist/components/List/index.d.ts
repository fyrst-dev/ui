import { default as ListRoot } from './ListRoot.vue';
import { default as ListItem } from './ListItem.vue';
export { ListRoot, ListItem };
declare const _default: {
    Root: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            items?: import('./ListItem.vue').ListItemProps[];
            size?: import('./ListItem.vue').ListItemProps["size"];
            state?: import('./ListItem.vue').ListItemProps["state"];
            icon?: import('./ListItem.vue').ListItemProps["icon"];
            css?: import('../../../styled-system/css').Styles;
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            icon: string | boolean;
            size: "sm" | "md" | "lg";
            state: "primary" | "danger" | "success" | "info" | "default";
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLUListElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            items?: import('./ListItem.vue').ListItemProps[];
            size?: import('./ListItem.vue').ListItemProps["size"];
            state?: import('./ListItem.vue').ListItemProps["state"];
            icon?: import('./ListItem.vue').ListItemProps["icon"];
            css?: import('../../../styled-system/css').Styles;
        }> & Readonly<{}>, {}, {}, {}, {}, {
            icon: string | boolean;
            size: "sm" | "md" | "lg";
            state: "primary" | "danger" | "success" | "info" | "default";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        items?: import('./ListItem.vue').ListItemProps[];
        size?: import('./ListItem.vue').ListItemProps["size"];
        state?: import('./ListItem.vue').ListItemProps["state"];
        icon?: import('./ListItem.vue').ListItemProps["icon"];
        css?: import('../../../styled-system/css').Styles;
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        icon: string | boolean;
        size: "sm" | "md" | "lg";
        state: "primary" | "danger" | "success" | "info" | "default";
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Item: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./ListItem.vue').ListItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLIElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./ListItem.vue').ListItemProps> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./ListItem.vue').ListItemProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            marker?(_: {}): any;
            default?(_: {}): any;
        };
    });
};
export default _default;
//# sourceMappingURL=index.d.ts.map