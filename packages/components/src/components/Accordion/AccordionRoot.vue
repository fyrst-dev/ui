<script setup lang="ts">
import type { AccordionItem as AccordionItemProps } from './types' 
import { accordion as accordionStyles } from './styles'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
import { computed } from 'vue'
import { css } from 'styled-system/css'

const props = withDefaults(defineProps<{
	type?: 'single' | 'multiple'
	orientation?: 'vertical' | 'horizontal'
	size?: 'md' | 'lg'
	items: AccordionItemProps[]
	classes?: any
}>(), {
	type: 'multiple',
	orientation: 'vertical',
	size: 'md',
	classes: {}
})

const accordionClasses = computed(() => accordionStyles({
	orientation: props.orientation,
	size: props.size
}))
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