import { Ref } from 'vue';
export interface FlyoutOptions {
    el: Ref<HTMLElement | undefined>;
}
export declare function useFlyout(options: FlyoutOptions): {
    open: Readonly<Ref<boolean, boolean>>;
    toggle: () => void;
};
//# sourceMappingURL=flyout.d.ts.map