<template>
  <div :class="css({
    display: 'flex',
    width: '100%'
  })">
    <div :class="css({
      flex: 1,
      padding: '3xl',
      bgColor: 'grey.black'
    })">
      <FyrstField.Text label="E-Mail Adresse"/>
    </div>
    <div :class="['light', css({
      flex: 1,
      padding: '3xl',
      bgColor: 'white'
    })]">
      <FyrstField.Text label="E-Mail Adresse" />
    </div>
  </div>
</template>

<script setup>
import { css } from "styled-system/css";
</script>
