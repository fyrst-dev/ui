<template>
    <ShowcaseContainer>
        <FyrstFieldText 
            name="emailAddress"
            label="E-Mail Adresse" 
            placeholder="Gib deine E-Mail Adresse ein"
            type="email"
            message="This is a description message."
            error="This is an error message."
            :required="true"
        />
    </ShowcaseContainer>
</template>

<script setup lang="ts">
</script>
