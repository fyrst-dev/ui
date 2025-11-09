<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
import { css } from 'styled-system/css'
import type { AccordionItem as AccordionItemProps } from './types'

const props = defineProps<{
  items: AccordionItemProps[]
}>()
</script>

<template>
  <AccordionRoot type="multiple">
    <AccordionItem v-for="item in items" :key="item.id" :value="item.id">
      <AccordionHeader>
        <AccordionTrigger>
          {{ item.title }}
          </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>
        <div v-html="item.content" />
        </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>