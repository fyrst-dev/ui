<template>
  <ShowcaseContainer>
    <!-- Basic PricingCard -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        Basic PricingCard
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Default pricing card with title, subtitle, price, optional hosting and feature list.
      </p>

      <FyrstPricingCardRoot
        title="Starter"
        subtitle="For new Onlineshops"
        currency="$"
        amount="999"
        :hosting="{ label: 'optional hosting', amount: 49, period: 'month' }"
        :features="features"
      />
    </div>

    <!-- Featured PricingCard -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        Featured PricingCard
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Highlighted pricing card using the primary brand token for the border.
      </p>

      <FyrstPricingCardRoot
        title="Starter"
        subtitle="For new Onlineshops"
        currency="$"
        amount="999"
        :hosting="{ label: 'optional hosting', amount: 49, period: 'month' }"
        :features="features"
        featured
      />
    </div>

    <!-- PricingCard without hosting -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        PricingCard without hosting
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Pricing card that only shows the price, without an optional hosting add-on line.
      </p>

      <FyrstPricingCardRoot
        title="Starter"
        subtitle="For new Onlineshops"
        currency="$"
        amount="999"
        :features="features"
      />
    </div>

    <!-- PricingCard with custom feature slot -->
    <div>
      <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
        PricingCard with custom feature slot
      </h2>
      <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
        Each feature can be customized through the #feature slot while still receiving the items via prop.
      </p>

      <FyrstPricingCardRoot
        title="Starter"
        subtitle="For new Onlineshops"
        currency="$"
        amount="999"
        :hosting="{ label: 'optional hosting', amount: 49, period: 'month' }"
        :features="features"
      >
        <template #feature="{ feature, index }">
          <span :class="css({ fontSize: 'sm', color: 'primary', fontWeight: '700' })">
            {{ index + 1 }}.
          </span>
          <span>{{ feature }}</span>
        </template>
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
