import { default as Alert } from './AlertRoot.vue';
export { Alert };
export type { AlertMessage } from './AlertRoot.vue';
declare const _default: {
    Root: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./AlertRoot.vue').Props> & Readonly<{
            onDismiss?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            dismiss: () => any;
        }, import('vue').PublicProps, {
            spacing: "md" | "lg";
            variant: "danger" | "success" | "warning" | "info";
            borderSize: "md" | "lg" | "xl";
            iconSize: "md" | "lg" | "xl";
            textSize: "md" | "lg";
            messages: import('./AlertRoot.vue').AlertMessage[];
            dismissible: boolean;
            role: "alert" | "status";
            classRoot: any;
            classIcon: any;
            classContent: any;
            classClose: any;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./AlertRoot.vue').Props> & Readonly<{
            onDismiss?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            spacing: "md" | "lg";
            variant: "danger" | "success" | "warning" | "info";
            borderSize: "md" | "lg" | "xl";
            iconSize: "md" | "lg" | "xl";
            textSize: "md" | "lg";
            messages: import('./AlertRoot.vue').AlertMessage[];
            dismissible: boolean;
            role: "alert" | "status";
            classRoot: any;
            classIcon: any;
            classContent: any;
            classClose: any;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./AlertRoot.vue').Props> & Readonly<{
        onDismiss?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        dismiss: () => any;
    }, string, {
        spacing: "md" | "lg";
        variant: "danger" | "success" | "warning" | "info";
        borderSize: "md" | "lg" | "xl";
        iconSize: "md" | "lg" | "xl";
        textSize: "md" | "lg";
        messages: import('./AlertRoot.vue').AlertMessage[];
        dismissible: boolean;
        role: "alert" | "status";
        classRoot: any;
        classIcon: any;
        classContent: any;
        classClose: any;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
        };
    });
};
export default _default;
//# sourceMappingURL=index.d.ts.map