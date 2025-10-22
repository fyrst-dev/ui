<template>
  <div>
    <div :class="css({
      padding: '3xl',
      bgColor: 'grey.black'
    })">
      <FyrstField.Text label="E-Mail Adresse"/>
    </div>
    <div :class="['light', css({
      padding: '3xl',
      bgColor: 'white'
    })]">
      <FyrstField.Text label="E-Mail Adresse" />
      <FyrstButton label="meddl"/>
    </div>
  </div>
</template>

<script setup>
import { css } from "styled-system/css";
</script>
