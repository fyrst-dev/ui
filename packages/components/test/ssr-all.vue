<script setup lang="ts">
import AccordionRoot from '../src/components/Accordion/AccordionRoot.vue'
import AlertRoot from '../src/components/Alert/AlertRoot.vue'
import BadgeRoot from '../src/components/Badge/BadgeRoot.vue'
import Button from '../src/components/Button/Button.vue'
import CardBody from '../src/components/Card/CardBody.vue'
import CardHeader from '../src/components/Card/CardHeader.vue'
import CardRoot from '../src/components/Card/CardRoot.vue'
import CarouselItem from '../src/components/Carousel/CarouselItem.vue'
import CarouselNavigation from '../src/components/Carousel/CarouselNavigation.vue'
import CarouselRoot from '../src/components/Carousel/CarouselRoot.vue'
import DialogRoot from '../src/components/Dialog/DialogRoot.vue'
import FieldBase from '../src/components/Field/FieldBase.vue'
import FieldCheckbox from '../src/components/Field/FieldCheckbox.vue'
import FieldError from '../src/components/Field/FieldError.vue'
import FieldInput from '../src/components/Field/FieldInput.vue'
import FieldLabel from '../src/components/Field/FieldLabel.vue'
import FieldMessage from '../src/components/Field/FieldMessage.vue'
import FieldRadioGroup from '../src/components/Field/FieldRadioGroup.vue'
import FieldRequired from '../src/components/Field/FieldRequired.vue'
import FieldSelect from '../src/components/Field/FieldSelect.vue'
import FieldSwitch from '../src/components/Field/FieldSwitch.vue'
import FieldTextarea from '../src/components/Field/FieldTextarea.vue'
import FieldUrl from '../src/components/Field/FieldUrl.vue'
import FlyoutDropdown from '../src/components/Flyout/FlyoutDropdown.vue'
import FlyoutRoot from '../src/components/Flyout/FlyoutRoot.vue'
import FormPrompt from '../src/components/Form/FormPrompt.vue'
import FormPromptFooter from '../src/components/Form/FormPromptFooter.vue'
import HeroLead from '../src/components/Hero/HeroLead.vue'
import ListItem from '../src/components/List/ListItem.vue'
import ListRoot from '../src/components/List/ListRoot.vue'
import Loader from '../src/components/Loader/Loader.vue'
import PricingCardBadge from '../src/components/PricingCard/PricingCardBadge.vue'
import PricingCardBody from '../src/components/PricingCard/PricingCardBody.vue'
import PricingCardHeader from '../src/components/PricingCard/PricingCardHeader.vue'
import PricingCardPricing from '../src/components/PricingCard/PricingCardPricing.vue'
import PricingCardRoot from '../src/components/PricingCard/PricingCardRoot.vue'
import ProgressRoot from '../src/components/Progress/ProgressRoot.vue'
import SwitchRoot from '../src/components/Switch/SwitchRoot.vue'
import TabItem from '../src/components/Tab/TabItem.vue'
import TabRoot from '../src/components/Tab/TabRoot.vue'
</script>

<template>
  <div>
    <AccordionRoot
      :items="[{ id: 'one', title: 'One', content: 'First' }]"
    />
    <AlertRoot
      variant="info"
      :messages="[{ description: 'Hello' }]"
    />
    <BadgeRoot label="New" />
    <Button label="Publish" />
    <CardRoot>
      <CardHeader
        title="Title"
        subtitle="Subtitle"
      />
      <CardBody>
        Body
      </CardBody>
    </CardRoot>
    <CarouselRoot>
      <CarouselItem>One</CarouselItem>
      <CarouselItem>Two</CarouselItem>
      <template #carousel-after>
        <CarouselNavigation />
      </template>
    </CarouselRoot>
    <DialogRoot
      :open="true"
      title="Dialog"
      description="Details"
    />
    <FieldBase
      id="ssr-field"
      message="Hint"
      error="Required"
    >
      <FieldLabel label="Name" />
      <FieldRequired />
      <FieldMessage />
      <FieldError />
    </FieldBase>
    <FieldInput
      name="email"
      label="Email"
      type="email"
    />
    <FieldInput
      id="ssr-password"
      name="password"
      label="Password"
      type="password"
      autocomplete="current-password"
      maxlength="64"
    />
    <FieldTextarea
      name="bio"
      label="Bio"
    />
    <FieldSelect
      name="topic"
      label="Topic"
      :options="[{ label: 'A', value: 'a' }]"
    />
    <FieldCheckbox
      name="terms"
      label="Accept"
    />
    <FieldRadioGroup
      name="choice"
      label="Choice"
      :options="[{ label: 'A', value: 'a' }]"
    />
    <FieldSwitch
      name="alerts"
      label="Alerts"
    />
    <FieldUrl
      name="site"
      label="Website"
    />
    <FlyoutRoot label="Menu">
      <FlyoutDropdown>
        Item
      </FlyoutDropdown>
    </FlyoutRoot>
    <FormPrompt
      id="prompt"
      name="prompt"
      action="https://example.com/submit"
    >
      <template #footer>
        <FormPromptFooter>
          <template #action>
            Send
          </template>
        </FormPromptFooter>
      </template>
    </FormPrompt>
    <HeroLead headline="Hello" />
    <ListRoot
      :items="[{ content: 'Item' }]"
    >
      <ListItem content="Item" />
    </ListRoot>
    <Loader :size="40" />
    <PricingCardRoot
      title="Plan"
      price="10"
    >
      <PricingCardBadge label="Popular" />
      <PricingCardHeader title="Plan" />
      <PricingCardPricing price="10" />
      <PricingCardBody />
    </PricingCardRoot>
    <ProgressRoot :model-value="50" />
    <SwitchRoot
      name="mode"
      label="Mode"
    />
    <TabRoot
      default-value="one"
      :items="[{ value: 'one', label: 'One' }]"
    >
      <TabItem
        value="one"
        label="One"
      />
    </TabRoot>
  </div>
</template>
