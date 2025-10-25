
<template>
    <ShowcaseContainer>
        <!-- Basic Card with Body -->
        <FyrstCardRoot>
            <FyrstCardBody>
                <h3 :class="css({ fontSize: 'xl', fontWeight: 'bold', marginBottom: 'sm' })">
                    Basic Card
                </h3>
                <p :class="css({ color: 'grey.300', _light: { color: 'grey.700' } })">
                    This is a basic card using the default border color and CardBody component.
                </p>
            </FyrstCardBody>
        </FyrstCardRoot>

        <!-- Card with Primary Border -->
        <FyrstCardRoot border-color="primary">
            <FyrstCardBody>
                <h3 :class="css({ fontSize: 'xl', fontWeight: 'bold', marginBottom: 'sm' })">
                    Primary Border Card
                </h3>
                <p :class="css({ color: 'grey.300', _light: { color: 'grey.700' } })">
                    This card has a primary colored border using borderColor="primary".
                </p>
            </FyrstCardBody>
        </FyrstCardRoot>

        <!-- Card with No Border -->
        <FyrstCardRoot border-color="none">
            <FyrstCardBody>
                <h3 :class="css({ fontSize: 'xl', fontWeight: 'bold', marginBottom: 'sm' })">
                    No Border Card
                </h3>
                <p :class="css({ color: 'grey.300', _light: { color: 'grey.700' } })">
                    This card has no border using borderColor="none".
                </p>
            </FyrstCardBody>
        </FyrstCardRoot>

        <!-- Card with Named Slots -->
        <FyrstCardRoot>
            <template #header>
                <div :class="css({ 
                    padding: 'xl', 
                    borderBottom: '1px solid',
                    borderColor: 'lucid.50',
                    _light: { borderColor: 'lucid.300' }
                })">
                    <h3 :class="css({ fontSize: 'xl', fontWeight: 'bold' })">
                        Card with Named Slots
                    </h3>
                </div>
            </template>

            <template #body>
                <FyrstCardBody>
                    <p :class="css({ color: 'grey.300', _light: { color: 'grey.700' } })">
                        This card uses the named slot pattern with #header, #body, and #footer slots.
                    </p>
                </FyrstCardBody>
            </template>

            <template #footer>
                <div :class="css({ 
                    padding: 'xl', 
                    borderTop: '1px solid',
                    borderColor: 'lucid.50',
                    _light: { borderColor: 'lucid.300' },
                    display: 'flex',
                    gap: 'sm',
                    justifyContent: 'flex-end'
                })">
                    <FyrstButton label="Cancel" color="secondary" size="sm" />
                    <FyrstButton label="Confirm" color="primary" size="sm" />
                </div>
            </template>
        </FyrstCardRoot>

        <!-- Card with Custom Content -->
        <FyrstCardRoot border-color="primary">
            <FyrstCardBody>
                <div :class="css({ display: 'flex', alignItems: 'center', gap: 'md', marginBottom: 'md' })">
                    <div :class="css({ 
                        width: '48px', 
                        height: '48px', 
                        borderRadius: 'full',
                        bg: 'primary',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'xl',
                        fontWeight: 'bold'
                    })">
                        ✓
                    </div>
                    <div>
                        <h3 :class="css({ fontSize: 'lg', fontWeight: 'bold', marginBottom: '2xs' })">
                            Success Message
                        </h3>
                        <p :class="css({ fontSize: 'sm', color: 'grey.300', _light: { color: 'grey.700' } })">
                            Your action was completed successfully
                        </p>
                    </div>
                </div>
                <p :class="css({ color: 'grey.300', _light: { color: 'grey.700' }, marginBottom: 'md' })">
                    This card demonstrates how you can compose custom content within the CardBody component.
                </p>
                <FyrstButton label="Continue" color="primary" size="sm" />
            </FyrstCardBody>
        </FyrstCardRoot>

        <!-- Grid of Cards -->
        <div :class="grid({ 
            columns: { 
                base: 1, md: 2, lg: 3
            },
            gap: 'lg'
        })">
            <FyrstCardRoot>
                <FyrstCardBody>
                    <h4 :class="css({ fontSize: 'lg', fontWeight: 'bold', marginBottom: 'sm' })">
                        Card 1
                    </h4>
                    <p :class="css({ fontSize: 'sm', color: 'grey.300', _light: { color: 'grey.700' } })">
                        Cards can be arranged in a responsive grid layout.
                    </p>
                </FyrstCardBody>
            </FyrstCardRoot>

            <FyrstCardRoot border-color="primary">
                <FyrstCardBody>
                    <h4 :class="css({ fontSize: 'lg', fontWeight: 'bold', marginBottom: 'sm' })">
                        Card 2
                    </h4>
                    <p :class="css({ fontSize: 'sm', color: 'grey.300', _light: { color: 'grey.700' } })">
                        This one uses the primary border color variant.
                    </p>
                </FyrstCardBody>
            </FyrstCardRoot>

            <FyrstCardRoot>
                <FyrstCardBody>
                    <h4 :class="css({ fontSize: 'lg', fontWeight: 'bold', marginBottom: 'sm' })">
                        Card 3
                    </h4>
                    <p :class="css({ fontSize: 'sm', color: 'grey.300', _light: { color: 'grey.700' } })">
                        All cards are fully responsive and theme-aware.
                    </p>
                </FyrstCardBody>
            </FyrstCardRoot>
        </div>
    </ShowcaseContainer>
</template>

<script setup lang="ts">
import { css } from 'styled-system/css';
import { grid } from 'styled-system/patterns';
</script>
