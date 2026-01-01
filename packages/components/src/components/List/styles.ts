import { sva } from 'styled-system/css'
import type { InjectionKey, ComputedRef } from "vue";

export type ListStyles = ReturnType<typeof listStyles.raw>;
export const ListStylesKey: InjectionKey<ComputedRef<ListStyles>> = Symbol("ListStyles");

export const listStyles = sva({
    slots: ['list', 'item', 'marker'],
    base: {
        list: {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap', 
            
        },
        item: {
            display: 'inline-flex',
        },
        marker: {
            display: 'inline-block',
            borderRadius: '5xl',
            flexBasis: 'auto',
            flexGrow: '0',
            backgroundColor: 'success.lucid.700'
        }
    },
    variants: {
        size: {
            sm: {
                list: {
                    gap: 'xs'
                },
                item: {
                    fontSize: 'sm',
                    gap: 'sm',
                },
                marker: {
                    width: '16px',
                    height: '16px',
                    minWidth: '16px',
                    marginTop: '2px',
                }
            },
            md: {
                list: {
                    gap: 'xs'
                },
                item: {
                    fontSize: 'md',
                    gap: 'sm',
                },
                marker: {
                    width: '20px',
                    height: '20px',
                    minWidth: '20px',
                    marginTop: '1px',
                }
            },
            lg: {
                list: {
                    gap: 'xs'
                },
                item: {
                    fontSize: 'lg',
                    gap: 'sm',
                },
                marker: {
                    width: '20px',
                    height: '20px',
                    minWidth: '20px',
                    marginTop: '6px',
                }
            }
        }
    },
    defaultVariants: {
        size: 'sm'
    }
})