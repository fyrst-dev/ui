<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
import { css, sva } from 'styled-system/css'
import type { AccordionItem as AccordionItemProps } from './types'

const props = withDefaults(defineProps<{
	type?: 'single' | 'multiple'
	orientation?: 'vertical' | 'horizontal'
	size?: 'md'
	items: AccordionItemProps[]
	classes?: any
}>(), {
	type: 'multiple',
	orientation: 'vertical',
	size: 'md',
	classes: {}
})

const accordion = sva({
	slots: ['root', 'item', 'trigger', 'content'],
	base: {
		root: {
			width: '100%',
			display: 'flex',
			flexWrap: 'wrap',
			overflow: 'clip',
			color: 'neutral',
		},
		item: {
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'grey.dusk',
			transition: 'all 300ms',
			overflow: 'clip',
			_open: {
				// bg: 'grey.night'
			},
			_closed: {
				_hover: {
					borderColor: 'grey.400',
				}
			}
		},
		trigger: {
			width: '100%',
			display: 'flex',
			flexWrap: 'nowrap',
			flexDirection: 'row',
			cursor: 'pointer',
			fontWeight: 'semibold',
			lineHeight: 'normal',
			alignItems: 'center',
			_open: {
				backgroundColor: 'grey.night',
				'& [data-trigger="icon"]': {
					transform: 'rotate(180deg)',
				}
			},
			'& [data-trigger="icon"]': {
				marginLeft: 'auto',
				transition: 'transform 0.2s ease-in-out',
			},
		},
		content: {
			display: 'block !important',
			interpolateSize: 'allow-keywords',
			overflow: 'clip',
			_open: {
				animationStyle: 'slideDown',
				'& [data-trigger="icon"]': {
					transform: 'rotate(180deg)',
					transition: 'transform 0.2s ease-in-out',
				}
			},
			_closed: {
				animationStyle: 'slideUp',
			}
		}
	},
	variants: {
		orientation: {
			horizontal: {
				root: {
					flexDirection: 'row',
				},
			},
			vertical: {
				root: {
					flexDirection: 'column',
				},
			},
		},
		size: {
			md: {
				root: {
					gap: 'md',
				},
				item: {
					borderRadius: 'lg',
				},
				trigger: {
					paddingY: 'md',
					paddingX: 'lg',
					gap: 'md',
					fontSize: {
						base: 'md',
						//md: 'lg'
					},
					'& [data-trigger="icon"]': {
						fontSize: {
							base: 'sm',
							md: 'md'
						}
					}
				},
				content: {
					'& > div': {
						padding: 'lg',
					}
				}
			}
		}
	}
})

const accordionClasses = accordion({
	orientation: props.orientation,
	size: props.size
})
</script>

<template>
	<AccordionRoot 
		:type="type"
		:orientation="orientation"
		:class="accordionClasses.root">

		<AccordionItem 
			v-if="items && items.length > 0"
			v-for="item in items" 
			:key="item.id" 
			:value="item.id"
			:class="accordionClasses.item">

			<AccordionHeader>
				<AccordionTrigger
					:class="accordionClasses.trigger">
					<slot name="icon" :item="item">
						<span 
							v-if="item.icon"
							:class="[
								`icon icon-${item.icon}`,
								classes?.icon || null
							]" />
					</slot>
					<span 
						:class="css({
							flex: '1 0%',
							whiteSpace: 'normal',
							wordBreak: 'break-word',
							textAlign: 'start'
						})"
						v-html="item.title" />
					<span 
						class="icon icon-caret-down-bold" 
						data-trigger="icon" />
				</AccordionTrigger>
			</AccordionHeader>

			<AccordionContent
				:class="accordionClasses.content">

				<slot name="content" :item="item">
					<div v-html="item.content" />
				</slot>
			</AccordionContent>
		</AccordionItem>
	</AccordionRoot>
</template>