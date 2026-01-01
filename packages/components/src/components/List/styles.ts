import { sva } from 'styled-system/css'
import type { InjectionKey, ComputedRef } from "vue";

export type ListStyles = ReturnType<typeof listStyles.raw>;
export const ListStylesKey: InjectionKey<ComputedRef<ListStyles>> = Symbol("ListStyles");

export const listStyles = sva({
    slots: ['list', 'item'],
    base: {
        list: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap', 
        },
        item: {
            _before: {
                content: '"',
                display: 'block',
                borderRadius: '5xl',
                flexBasis: 'auto',
                flexGrow: '0'
            },
            '& [data-list-item]': {
                flexGrow: 1,
                flexBasis: '0%'
            }
        }
    }
})