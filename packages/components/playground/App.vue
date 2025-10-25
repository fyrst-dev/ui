<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import Field from '@/components/Field'

const email = ref('')
</script>


<template>
  <div 
    class="dark" style="padding: 40px; max-width: 600px; margin: 0 auto; background: #1e1e1e; border-radius: 12px;">
      

        <Field.Text 
          label="Email Address" 
          placeholder="Enter your email"
          v-model="email"
          name="email"
          id="email"
        />
        
      </div>
  <div 
    class="light" style="padding: 40px; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px;">
      

        <Field.Text 
          label="Email Address" 
          placeholder="Enter your email"
          v-model="email"
          name="email"
          id="email"
        />
  </div>
</template>