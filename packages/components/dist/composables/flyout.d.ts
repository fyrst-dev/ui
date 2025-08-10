import { Ref } from 'vue';
interface FlyoutOptions {
    el: Ref<HTMLElement | undefined>;
}
export declare const focusedElement: Ref<HTMLElement | undefined, HTMLElement | undefined>;
export declare function useFlyout(options: FlyoutOptions): {
    open: Readonly<Ref<boolean, boolean>>;
    toggle: () => void;
};
export {};
//# sourceMappingURL=flyout.d.ts.map