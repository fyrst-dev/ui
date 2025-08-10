<template>
    <div :class="cssClasses.root">
        <slot name="headline">
            <component 
                v-if="headline"
                :is="headlineTag"
                :class="cssClasses.headline">
                <span v-html="headline" />
            </component>
        </slot>
        <slot name="description">
            <div 
                v-if="description" 
                v-html="description" 
                :class="cssClasses.description" />
        </slot>
        <slot name="actions" />
    </div>
</template>

<script setup lang="ts">
    import { sva } from 'styled-system/css'
    import { computed } from 'vue'

    const props = withDefaults(defineProps<{
        headline?: string
        headlineTag?: string
        description?: string
        alignItems?: 'start' | 'center' | 'end'
        size?: 'sm' | 'md' | 'lg'
    }>(), {
        headlineTag: 'h1',
        alignItems: 'start',
        size: 'md'
    })

    const heroLeadStyle = sva({
        slots: ['root', 'headline', 'description', 'actions'],
        base: {
            root: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                gap: 'xl'
            },
            headline: {
                textWrap: 'balance',
                fontWeight: '750',
                transition: 'all 200ms',
                '& mark, & strong': {
                    color: 'primary'
                },
            },
            description: {
                color: 'grey.dawn',
                textWrap: 'balance',
                transition: 'all 200ms',
                '& mark, & strong, & a': {
                    color: 'neutral'
                },
                _light: {
                    color: 'grey.400'
                }
            }
        },
        variants: {
            alignItems: {
                start: { 
                    root: { 
                        alignItems: 'start' 
                    }
                },
                center: { 
                    root: { 
                        alignItems: 'center' 
                    }
                },
                end: { 
                    root: { 
                        alignItems: 'end' 
                    }
                }
            },
            size: {
                sm: {
                    root: {},
                    headline: {
                        fontSize: { 
                            base: 'xl', 
                            xl: '2xl' 
                        },
                        lineHeight: '1.25',
                    },
                    description: {
                        fontSize: { 
                            base: 'sm',
                            'md': 'md',
                        },
                    }
                },
                md: {
                    root: {},
                    headline: {
                        fontSize: { 
                            base: '2xl', 
                            xl: '3xl' 
                        },
                        lineHeight: '1.25',
                    },
                    description: {
                        fontSize: { 
                            base: 'md',
                            'md': 'lg',
                        },
                    }
                },
                lg: {
                    root: {},
                    headline: {
                        fontSize: { 
                            base: '2xl', 
                            'md':'4xl',
                            '2xl':'5xl',
                        },
                        lineHeight: '1.1',
                    },
                    description: {
                        fontSize: { 
                            base: 'md',
                            'md': 'lg', 
                            '2xl': 'xl' 
                        },
                        lineHeight: '1.75',
                    }
                }
            }
        }
    })

    const cssClasses = computed(() => {
        return heroLeadStyle({ 
            alignItems: props.alignItems || 'start',
            size: props.size || 'md'
        })
    })
</script>