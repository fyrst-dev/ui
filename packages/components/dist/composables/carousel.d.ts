import { Slots, Ref } from 'vue';
/**
 * @todo #3
 * There is a bug in `viewPort` scrollmode where its impossible to scroll if the viewport is too small.
 * It seems that elements doesn't get the visible flag and this causes follow-up problems
 * @todo
 * `item` scrollmode is buggy, it doesn't scroll to the next item
 * @param props
 * @param carousel
 * @param slots
 * @returns {object}
 */
export declare function useCarousel(props: {
    scrollMode: 'item' | 'viewport';
}, carousel: Ref<HTMLElement | null>, slots: Slots): {
    handleNext: () => void;
    handlePrev: () => void;
    handleWheel: (event: WheelEvent) => void;
    carouselItems: Ref<{
        [x: number]: HTMLElement;
        item: (index: number) => HTMLElement;
        forEach: (callbackfn: (value: HTMLElement, key: number, parent: NodeListOf<HTMLElement>) => void, thisArg?: any) => void;
        readonly length: number;
    } | null, NodeListOf<HTMLElement> | {
        [x: number]: HTMLElement;
        item: (index: number) => HTMLElement;
        forEach: (callbackfn: (value: HTMLElement, key: number, parent: NodeListOf<HTMLElement>) => void, thisArg?: any) => void;
        readonly length: number;
    } | null>;
    carouselItem: import('vue').ComputedRef<HTMLElement | null | undefined>;
    currentCarouselItemIndex: Ref<number, number>;
    visibleCarouselItems: Ref<HTMLElement[], HTMLElement[]>;
    scrollDirection: Ref<"next" | "prev" | null, "next" | "prev" | null>;
    allItemsVisible: import('vue').ComputedRef<boolean>;
    pages: import('vue').ComputedRef<number>;
};
//# sourceMappingURL=carousel.d.ts.map