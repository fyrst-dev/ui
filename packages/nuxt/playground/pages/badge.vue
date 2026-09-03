<template>
  <ShowcaseContainer>
    <!-- Colors -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        Colors
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Color variants: default, primary, success, info, and danger.
      </p>

      <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap', alignItems: 'center' })">
        <FyrstBadgeRoot label="Default" color="default" />
        <FyrstBadgeRoot label="Primary" color="primary" />
        <FyrstBadgeRoot label="Success" color="success" />
        <FyrstBadgeRoot label="Info" color="info" />
        <FyrstBadgeRoot label="Danger" color="danger" />
      </div>
    </div>

    <!-- Sizes -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        Sizes
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Three size variants: sm, md (default), and lg.
      </p>

      <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap', alignItems: 'center' })">
        <FyrstBadgeRoot label="Small" size="sm" color="primary" />
        <FyrstBadgeRoot label="Medium" size="md" color="primary" />
        <FyrstBadgeRoot label="Large" size="lg" color="primary" />
      </div>
    </div>

    <!-- With icon -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        With icon
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Use the icon slot to prepend an Iconify icon.
      </p>

      <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap', alignItems: 'center' })">
        <FyrstBadgeRoot label="Info" color="info">
          <template #icon>
            <span class="icon icon-info-bold" />
          </template>
        </FyrstBadgeRoot>
        <FyrstBadgeRoot label="Success" color="success">
          <template #icon>
            <span class="icon icon-check-bold" />
          </template>
        </FyrstBadgeRoot>
        <FyrstBadgeRoot label="Danger" color="danger">
          <template #icon>
            <span class="icon icon-x-bold" />
          </template>
        </FyrstBadgeRoot>
      </div>
    </div>
  </ShowcaseContainer>
</template>

<script setup lang="ts">
import { css } from 'styled-system/css'
</script>
