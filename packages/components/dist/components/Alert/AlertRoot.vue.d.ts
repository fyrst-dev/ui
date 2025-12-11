type Variant = 'danger' | 'success' | 'info' | 'warning';
export interface AlertMessage {
    title?: string | null;
    description: string;
}
export interface Props {
    variant?: Variant;
    spacing?: 'md' | 'lg';
    iconSize?: 'md' | 'lg' | 'xl';
    textSize?: 'md' | 'lg';
    borderSize?: 'md' | 'lg' | 'xl';
    messages?: AlertMessage[];
    dismissible?: boolean;
    role?: 'alert' | 'status';
    classRoot?: any;
    classIcon?: any;
    classContent?: any;
    classClose?: any;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onDismiss?: (() => any) | undefined;
}>, {
    spacing: "md" | "lg";
    variant: Variant;
    borderSize: "md" | "lg" | "xl";
    iconSize: "md" | "lg" | "xl";
    textSize: "md" | "lg";
    messages: AlertMessage[];
    dismissible: boolean;
    role: "alert" | "status";
    classRoot: any;
    classIcon: any;
    classContent: any;
    classClose: any;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=AlertRoot.vue.d.ts.map