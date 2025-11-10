<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
import { css } from 'styled-system/css'
import type { AccordionItem as AccordionItemProps } from './types'

const props = withDefaults(defineProps<{
	type?: 'single' | 'multiple'
	items: AccordionItemProps[]
}>(), {
	type: 'multiple'
})
</script>

<template>
	<AccordionRoot 
		:type="type">

		<AccordionItem 
			v-for="item in items" 
			:key="item.id" 
			:value="item.id">

			<AccordionHeader>
				<AccordionTrigger
					v-html="item.title" />
			</AccordionHeader>

			<AccordionContent
				v-html="item.content" />
		</AccordionItem>
	</AccordionRoot>
</template>