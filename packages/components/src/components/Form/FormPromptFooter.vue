<script setup lang="ts">
import { css } from 'styled-system/css'
</script>

<template>
  <div
    :class="css({
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 'xl',
      alignItems: 'end',
    })"
  >
    <div
      :class="css({
        'flex': '1',
        'flexBasis': '100%',
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'gap': 'md',
        '@container (min-width: 600px)': {
          flexBasis: '0%',
        },
      })"
    >
      <slot name="inputs" />
    </div>

    <div
      :class="css({
        'flex': '0',
        'flexBasis': '100%',
        '@container (min-width: 600px)': {
          flexBasis: 'auto',
        },
      })"
    >
      <slot name="action" />
    </div>
  </div>
</template>
