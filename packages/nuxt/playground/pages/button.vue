<template>
    <ShowcaseContainer>
        <!-- Button Colors -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Button Colors
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Three color variants: primary, secondary, and transparent.
            </p>
            
            <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap' })">
                <FyrstButton label="Primary Button" color="primary" />
                <FyrstButton label="Secondary Button" color="secondary" />
                <FyrstButton label="Transparent Button" color="transparent" />
            </div>
        </div>

        <!-- Button Sizes -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Button Sizes
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Three size variants: sm, md (default), and lg.
            </p>
            
            <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap', alignItems: 'center' })">
                <FyrstButton label="Small Button" size="sm" color="primary" />
                <FyrstButton label="Medium Button" size="md" color="primary" />
                <FyrstButton label="Large Button" size="lg" color="primary" />
            </div>
        </div>

        <!-- Button Types -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Button Types
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Buttons can have different types: button (default), submit, and reset.
            </p>
            
            <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap' })">
                <FyrstButton label="Button Type" type="button" color="primary" />
                <FyrstButton label="Submit Type" type="submit" color="primary" />
                <FyrstButton label="Reset Type" type="reset" color="secondary" />
            </div>
        </div>

        <!-- Button as Link -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Button as Link
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                When the "to" prop is provided, the button renders as an anchor tag.
            </p>
            
            <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap' })">
                <FyrstButton label="Internal Link" to="/hero" color="primary" />
                <FyrstButton label="External Link" to="https://fyrst.dev" :external="true" color="secondary" />
            </div>
        </div>

        <!-- Disabled State -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Disabled State
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Buttons can be disabled to prevent user interaction.
            </p>
            
            <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap' })">
                <FyrstButton label="Disabled Primary" color="primary" :disabled="true" />
                <FyrstButton label="Disabled Secondary" color="secondary" :disabled="true" />
                <FyrstButton label="Disabled Transparent" color="transparent" :disabled="true" />
            </div>
        </div>

        <!-- All Combinations Grid -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                All Color and Size Combinations
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Complete matrix of all color and size variants.
            </p>
            
            <div :class="css({ display: 'flex', flexDirection: 'column', gap: 'lg' })">
                <!-- Primary -->
                <div>
                    <h3 :class="css({ fontSize: 'lg', fontWeight: 'semibold', marginBottom: 'sm' })">
                        Primary
                    </h3>
                    <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap', alignItems: 'center' })">
                        <FyrstButton label="Small" size="sm" color="primary" />
                        <FyrstButton label="Medium" size="md" color="primary" />
                        <FyrstButton label="Large" size="lg" color="primary" />
                    </div>
                </div>

                <!-- Secondary -->
                <div>
                    <h3 :class="css({ fontSize: 'lg', fontWeight: 'semibold', marginBottom: 'sm' })">
                        Secondary
                    </h3>
                    <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap', alignItems: 'center' })">
                        <FyrstButton label="Small" size="sm" color="secondary" />
                        <FyrstButton label="Medium" size="md" color="secondary" />
                        <FyrstButton label="Large" size="lg" color="secondary" />
                    </div>
                </div>

                <!-- Transparent -->
                <div>
                    <h3 :class="css({ fontSize: 'lg', fontWeight: 'semibold', marginBottom: 'sm' })">
                        Transparent
                    </h3>
                    <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap', alignItems: 'center' })">
                        <FyrstButton label="Small" size="sm" color="transparent" />
                        <FyrstButton label="Medium" size="md" color="transparent" />
                        <FyrstButton label="Large" size="lg" color="transparent" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Buttons in Card -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Buttons in Context
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Buttons composed with other components in real-world scenarios.
            </p>
            
            <FyrstCardRoot border-color="primary">
                <FyrstCardBody>
                    <div :class="css({ display: 'flex', flexDirection: 'column', gap: 'md' })">
                        <h3 :class="css({ fontSize: 'xl', fontWeight: 'bold' })">
                            Action Required
                        </h3>
                        <p :class="css({ color: 'grey.300', _light: { color: 'grey.700' } })">
                            Please confirm your email address to continue using our service. Check your inbox for a verification link.
                        </p>
                        <div :class="css({ display: 'flex', gap: 'sm', justifyContent: 'flex-end' })">
                            <FyrstButton label="Remind Me Later" color="transparent" size="sm" />
                            <FyrstButton label="Resend Email" color="secondary" size="sm" />
                            <FyrstButton label="Verify Now" color="primary" size="sm" />
                        </div>
                    </div>
                </FyrstCardBody>
            </FyrstCardRoot>
        </div>

        <!-- Button Group Patterns -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Button Group Patterns
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Common button grouping patterns for forms and actions.
            </p>
            
            <div :class="css({ display: 'flex', flexDirection: 'column', gap: 'lg' })">
                <!-- Primary + Secondary -->
                <div>
                    <h4 :class="css({ fontSize: 'md', fontWeight: 'semibold', marginBottom: 'sm' })">
                        Primary with Secondary
                    </h4>
                    <div :class="css({ display: 'flex', gap: 'sm' })">
                        <FyrstButton label="Cancel" color="secondary" />
                        <FyrstButton label="Continue" color="primary" />
                    </div>
                </div>

                <!-- Multiple Actions -->
                <div>
                    <h4 :class="css({ fontSize: 'md', fontWeight: 'semibold', marginBottom: 'sm' })">
                        Multiple Actions
                    </h4>
                    <div :class="css({ display: 'flex', gap: 'sm', flexWrap: 'wrap' })">
                        <FyrstButton label="Save Draft" color="transparent" />
                        <FyrstButton label="Preview" color="secondary" />
                        <FyrstButton label="Publish" color="primary" />
                    </div>
                </div>

                <!-- Full Width -->
                <div>
                    <h4 :class="css({ fontSize: 'md', fontWeight: 'semibold', marginBottom: 'sm' })">
                        Full Width
                    </h4>
                    <FyrstButton 
                        label="Continue to Payment" 
                        color="primary" 
                        size="lg"
                        :class="css({ width: '100%' })"
                    />
                </div>
            </div>
        </div>

        <!-- Interactive Demo -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Interactive Demo
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Click the buttons below to see console output.
            </p>
            
            <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap' })">
                <FyrstButton 
                    label="Click Me" 
                    color="primary" 
                    @click="handleClick('Primary button clicked!')"
                />
                <FyrstButton 
                    label="Click Me Too" 
                    color="secondary" 
                    @click="handleClick('Secondary button clicked!')"
                />
                <FyrstButton 
                    label="I'm Disabled" 
                    color="primary" 
                    :disabled="true"
                    @click="handleClick('This should not appear')"
                />
            </div>
            
            <p 
                v-if="clickMessage" 
                :class="css({ 
                    marginTop: 'md', 
                    padding: 'md', 
                    bg: 'lucid.50',
                    _light: { bg: 'lucid.200' },
                    borderRadius: 'md',
                    fontSize: 'sm'
                })"
            >
                {{ clickMessage }}
            </p>
        </div>
    </ShowcaseContainer>
</template>

<script setup lang="ts">
import { css } from 'styled-system/css';
import { ref } from 'vue';

const clickMessage = ref<string | null>(null);

const handleClick = (message: string) => {
    console.log(message);
    clickMessage.value = message;
    setTimeout(() => {
        clickMessage.value = null;
    }, 3000);
};
</script>
