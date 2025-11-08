<script setup lang="ts">
import { Accordion } from '@ark-ui/vue/accordion'
import { css } from 'styled-system/css'
import type { AccordionItem } from './types'

const props = defineProps<{
  items: AccordionItem[]
}>()
</script>

<template>
  <Accordion.Root :collapsible="true" :multiple="true">
    <Accordion.Item v-for="item in items" :key="item.id" :value="item.id">
      <Accordion.ItemTrigger>
        <div v-html="item.title" />
        <Accordion.ItemIndicator>
          >
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent>
        <div v-html="item.content" />
      </Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>