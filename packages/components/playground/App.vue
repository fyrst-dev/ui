<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import Field from '@/components/Field'

const email = ref('')
</script>


<template>
  <div style="padding: 40px; max-width: 600px; margin: 0 auto;">
    <h1 style="margin-bottom: 32px; color: white;">FieldText Component Demo</h1>
    
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <Field.Text 
        label="Email Address" 
        placeholder="Enter your email"
        v-model="email"
        name="email"
        id="email"
      />
      
      <Field.Text 
        placeholder="Search without label..."
        name="search"
        id="search"
      />
      
      <Field.Text 
        label="Disabled Field" 
        placeholder="This field is disabled"
        disabled
      />
    </div>
    
    <div style="margin-top: 32px; padding: 16px; background: rgba(255,255,255,0.1); border-radius: 8px;">
      <h3 style="color: white; margin-bottom: 12px;">Email Value:</h3>
      <pre style="color: white; font-size: 14px;">{{ email }}</pre>
    </div>
    
    <Button style="margin-top: 24px;" label="Test Button" />
  </div>
</template>