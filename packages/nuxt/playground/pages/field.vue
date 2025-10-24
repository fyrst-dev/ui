<template>
    <ShowcaseContainer>
        <FyrstFieldInput 
            name="emailAddress"
            label="E-Mail Adresse" 
            placeholder="Gib deine E-Mail Adresse ein"
            type="email"
            message="This is a description message."
            error="This is an error message."
            :required="true"
        />

        <FyrstFormPrompt 
            action="/submit"
            method="post"
            id="formPrompt"
            name="formPrompt"
            ariaLabel="Form Prompt"
            placeholder="faf"
        >
            <template #footer>
                <FyrstFormPromptFooter>
                    <template #inputs>
                        <FyrstFieldInput 
                            name="name"
                            label="Name" 
                            id="name"
                            placeholder="Your full name"
                            type="text"
                            :required="true"
                            :class="css({
                                flex: '1',
                                flexBasis: { 
                                    base: 'auto'
                                }
                            })"
                        />
    
                        <FyrstFieldInput 
                            name="email"
                            label="E-Mail" 
                            placeholder="Your E-Mail address"
                            type="email"
                            :required="true"
                            :class="css({
                                flex: '1',
                                flexBasis: { base: 'auto' }
                            })"
                        />
                    </template>

                    <template #action>
                        <FyrstButton 
                            label="Submit"
                            type="submit" 
                            color="primary" 
                            :class="css({
                                width: '100%',
                                '@container (min-width: 600px)': {
                                    width: 'auto'
                                }
                            })"
                            />
                    </template>
                </FyrstFormPromptFooter>
            </template>
        </FyrstFormPrompt>
    </ShowcaseContainer>
</template>

<script setup lang="ts">
import { css } from '~/styled-system/css';
</script>
