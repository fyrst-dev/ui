<template>
  <ShowcaseContainer>
    <!-- Basic PricingCard -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        Basic PricingCard
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Default pricing card with data provided through the Root component.
      </p>

      <FyrstPricingCardRoot
        title="Starter"
        subtitle="For new Onlineshops"
        price="$999"
        :features="features"
      >
        <FyrstPricingCardHeader />
        <FyrstPricingCardPricing />
        <FyrstPricingCardBody />
      </FyrstPricingCardRoot>
    </div>

    <!-- Highlighted PricingCard -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        Highlighted PricingCard
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Highlighted pricing card using the primary brand token for the border.
      </p>

      <FyrstPricingCardRoot
        title="Starter"
        subtitle="For new Onlineshops"
        price="$999"
        :features="features"
        highlight
      >
        <FyrstPricingCardBadge label="Featured" />
        <FyrstPricingCardHeader />
        <FyrstPricingCardPricing />
        <FyrstPricingCardBody />
      </FyrstPricingCardRoot>
    </div>

    <!-- PricingCard with prop override -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        PricingCard with prop override
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Child component props take precedence over injected data.
      </p>

      <FyrstPricingCardRoot
        title="Starter"
        subtitle="For new Onlineshops"
        price="$999"
        :features="features"
      >
        <FyrstPricingCardHeader />
        <FyrstPricingCardPricing price="$899" />
        <FyrstPricingCardBody />
      </FyrstPricingCardRoot>
    </div>

    <!-- PricingCard with per-component css map overrides -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        Per-component css map overrides
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Each component accepts a <code>css</code> prop keyed by slot name. The outermost element is always <code>root</code>; inner slots keep their SVA names. Styles are scoped per component and never cross boundaries.
      </p>

      <FyrstPricingCardRoot
        title="Pro"
        subtitle="For growing shops"
        price="$1,499"
        :features="features"
        :css="{ root: { maxWidth: '420px', borderRadius: 'lg', boxShadow: '0 10px 30px {colors.grey.900}' } }"
      >
        <FyrstPricingCardBadge label="Best Value" :css="{ root: { bg: 'success', fontSize: 'xs', paddingInline: 'lg' } }" />
        <FyrstPricingCardHeader :css="{ root: { padding: 'xl' }, headerPackage: { gap: 'xs' }, title: { fontSize: '2xl' } }" />
        <FyrstPricingCardPricing :css="{ root: { paddingInline: 'xl', marginBottom: 'md' }, price: { color: 'primary', fontSize: '3xl' } }" />
        <FyrstPricingCardBody :css="{ root: { paddingBlock: 'xl', paddingInline: 'xl' }, feature: { fontSize: 'sm' }, featureIcon: { color: 'success' } }" />
      </FyrstPricingCardRoot>
    </div>
  </ShowcaseContainer>
</template>

<script setup lang="ts">
import { css } from 'styled-system/css'

const features = [
  'Production ready in 14 days',
  'Shopware Installation',
  'Theme Setup',
  '1 Saleschannel Setup',
]
</script>
