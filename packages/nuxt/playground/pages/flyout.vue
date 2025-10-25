<template>
    <ShowcaseContainer>
        <!-- Basic Flyout -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Basic Flyout
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                A simple flyout that opens on hover with default left alignment.
            </p>
            
            <FyrstFlyoutRoot label="Hover me">
                <FyrstCardRoot>
                    <FyrstCardBody>
                        <div :class="css({ minWidth: '250px' })">
                            <h3 :class="css({ fontSize: 'lg', fontWeight: 'bold', marginBottom: 'sm' })">
                                Flyout Content
                            </h3>
                            <p :class="css({ fontSize: 'sm', color: 'grey.300', _light: { color: 'grey.700' } })">
                                This is a basic flyout that appears when you hover over the trigger.
                            </p>
                        </div>
                    </FyrstCardBody>
                </FyrstCardRoot>
            </FyrstFlyoutRoot>
        </div>

        <!-- Flyout with Custom Trigger -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Custom Trigger
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Flyout with a custom trigger button using the #trigger slot.
            </p>
            
            <FyrstFlyoutRoot aria-label="User Menu">
                <template #trigger="{ open }">
                    <FyrstButton 
                        :label="open ? 'Menu Open ▲' : 'User Menu ▼'"
                        color="primary"
                        size="md"
                    />
                </template>

                <FyrstCardRoot border-color="primary">
                    <FyrstCardBody>
                        <div :class="css({ minWidth: '200px' })">
                            <ul :class="css({ listStyle: 'none', padding: 0 })">
                                <li :class="css({ 
                                    padding: 'sm',
                                    cursor: 'pointer',
                                    borderRadius: 'md',
                                    _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                })">
                                    Profile
                                </li>
                                <li :class="css({ 
                                    padding: 'sm',
                                    cursor: 'pointer',
                                    borderRadius: 'md',
                                    _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                })">
                                    Settings
                                </li>
                                <li :class="css({ 
                                    padding: 'sm',
                                    cursor: 'pointer',
                                    borderRadius: 'md',
                                    _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                })">
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </FyrstCardBody>
                </FyrstCardRoot>
            </FyrstFlyoutRoot>
        </div>

        <!-- Right-Aligned Flyout -->
        <div :class="css({ display: 'flex', justifyContent: 'flex-end' })">
            <div>
                <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                    Right-Aligned Flyout
                </h2>
                <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                    Flyout dropdown aligned to the right using direction="right" on FlyoutDropdown.
                </p>
                
                <FyrstFlyoutRoot label="Options ⚙">
                    <template #dropdown="{ open }">
                        <Transition name="flyout">
                            <FyrstFlyoutDropdown v-if="open" direction="right">
                                <FyrstCardRoot>
                                    <FyrstCardBody>
                                        <div :class="css({ minWidth: '220px' })">
                                            <h4 :class="css({ fontSize: 'md', fontWeight: 'bold', marginBottom: 'sm' })">
                                                Options
                                            </h4>
                                            <div :class="css({ display: 'flex', flexDirection: 'column', gap: 'xs' })">
                                                <label :class="css({ display: 'flex', alignItems: 'center', gap: 'xs', cursor: 'pointer' })">
                                                    <input type="checkbox" />
                                                    <span :class="css({ fontSize: 'sm' })">Enable notifications</span>
                                                </label>
                                                <label :class="css({ display: 'flex', alignItems: 'center', gap: 'xs', cursor: 'pointer' })">
                                                    <input type="checkbox" />
                                                    <span :class="css({ fontSize: 'sm' })">Auto-save</span>
                                                </label>
                                                <label :class="css({ display: 'flex', alignItems: 'center', gap: 'xs', cursor: 'pointer' })">
                                                    <input type="checkbox" />
                                                    <span :class="css({ fontSize: 'sm' })">Dark mode</span>
                                                </label>
                                            </div>
                                        </div>
                                    </FyrstCardBody>
                                </FyrstCardRoot>
                            </FyrstFlyoutDropdown>
                        </Transition>
                    </template>
                </FyrstFlyoutRoot>
            </div>
        </div>

        <!-- Flyout with Rich Content -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Rich Content Flyout
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Flyout with complex content including images, text, and actions.
            </p>
            
            <FyrstFlyoutRoot label="Product Info">
                <FyrstCardRoot border-color="primary">
                    <FyrstCardBody>
                        <div :class="css({ width: '300px' })">
                            <div :class="css({ 
                                width: '100%',
                                height: '150px',
                                bg: 'primary',
                                borderRadius: 'md',
                                marginBottom: 'md',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2xl'
                            })">
                                🎨
                            </div>
                            <h3 :class="css({ fontSize: 'lg', fontWeight: 'bold', marginBottom: 'sm' })">
                                Premium Product
                            </h3>
                            <p :class="css({ 
                                fontSize: 'sm', 
                                color: 'grey.300', 
                                _light: { color: 'grey.700' },
                                marginBottom: 'md'
                            })">
                                A high-quality product with excellent features and great value for your money.
                            </p>
                            <div :class="css({ display: 'flex', gap: 'sm', marginBottom: 'md' })">
                                <span :class="css({ 
                                    fontSize: 'xs',
                                    padding: '2xs sm',
                                    bg: 'lucid.50',
                                    _light: { bg: 'lucid.200' },
                                    borderRadius: 'md'
                                })">
                                    Popular
                                </span>
                                <span :class="css({ 
                                    fontSize: 'xs',
                                    padding: '2xs sm',
                                    bg: 'lucid.50',
                                    _light: { bg: 'lucid.200' },
                                    borderRadius: 'md'
                                })">
                                    New
                                </span>
                            </div>
                            <div :class="css({ display: 'flex', gap: 'sm' })">
                                <FyrstButton label="Learn More" color="secondary" size="sm" />
                                <FyrstButton label="Buy Now" color="primary" size="sm" />
                            </div>
                        </div>
                    </FyrstCardBody>
                </FyrstCardRoot>
            </FyrstFlyoutRoot>
        </div>

        <!-- Multiple Flyouts in a Row -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Multiple Flyouts
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Multiple flyouts can coexist, each with its own trigger and content.
            </p>
            
            <div :class="css({ display: 'flex', gap: 'md', flexWrap: 'wrap' })">
                <FyrstFlyoutRoot label="File">
                    <FyrstCardRoot>
                        <FyrstCardBody>
                            <div :class="css({ minWidth: '150px' })">
                                <ul :class="css({ listStyle: 'none', padding: 0, fontSize: 'sm' })">
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        New
                                    </li>
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Open
                                    </li>
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Save
                                    </li>
                                </ul>
                            </div>
                        </FyrstCardBody>
                    </FyrstCardRoot>
                </FyrstFlyoutRoot>

                <FyrstFlyoutRoot label="Edit">
                    <FyrstCardRoot>
                        <FyrstCardBody>
                            <div :class="css({ minWidth: '150px' })">
                                <ul :class="css({ listStyle: 'none', padding: 0, fontSize: 'sm' })">
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Cut
                                    </li>
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Copy
                                    </li>
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Paste
                                    </li>
                                </ul>
                            </div>
                        </FyrstCardBody>
                    </FyrstCardRoot>
                </FyrstFlyoutRoot>

                <FyrstFlyoutRoot label="View">
                    <FyrstCardRoot>
                        <FyrstCardBody>
                            <div :class="css({ minWidth: '150px' })">
                                <ul :class="css({ listStyle: 'none', padding: 0, fontSize: 'sm' })">
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Zoom In
                                    </li>
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Zoom Out
                                    </li>
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Fullscreen
                                    </li>
                                </ul>
                            </div>
                        </FyrstCardBody>
                    </FyrstCardRoot>
                </FyrstFlyoutRoot>

                <FyrstFlyoutRoot label="Help">
                    <FyrstCardRoot border-color="primary">
                        <FyrstCardBody>
                            <div :class="css({ minWidth: '150px' })">
                                <ul :class="css({ listStyle: 'none', padding: 0, fontSize: 'sm' })">
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Documentation
                                    </li>
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        Support
                                    </li>
                                    <li :class="css({ 
                                        padding: 'xs',
                                        cursor: 'pointer',
                                        _hover: { bg: 'lucid.50', _light: { bg: 'lucid.200' } }
                                    })">
                                        About
                                    </li>
                                </ul>
                            </div>
                        </FyrstCardBody>
                    </FyrstCardRoot>
                </FyrstFlyoutRoot>
            </div>
        </div>

        <!-- Flyout with Custom Styled Trigger -->
        <div>
            <h2 :class="css({ fontSize: '2xl', fontWeight: 'bold', marginBottom: 'md' })">
                Custom Styled Trigger
            </h2>
            <p :class="css({ marginBottom: 'lg', color: 'grey.300', _light: { color: 'grey.700' } })">
                Flyout with custom trigger styling using the classTrigger prop.
            </p>
            
            <FyrstFlyoutRoot 
                label="Styled Trigger"
                :class-trigger="css.raw({
                    padding: 'md lg',
                    bg: 'primary',
                    color: 'white',
                    borderRadius: 'lg',
                    fontWeight: 'bold',
                    border: 'none',
                    _hover: {
                        bg: 'primary',
                        opacity: 0.9
                    }
                })">
                <FyrstCardRoot>
                    <FyrstCardBody>
                        <div :class="css({ minWidth: '250px' })">
                            <h3 :class="css({ fontSize: 'lg', fontWeight: 'bold', marginBottom: 'sm' })">
                                Custom Trigger Style
                            </h3>
                            <p :class="css({ fontSize: 'sm', color: 'grey.300', _light: { color: 'grey.700' } })">
                                The trigger button has custom styling applied via the classTrigger prop.
                            </p>
                        </div>
                    </FyrstCardBody>
                </FyrstCardRoot>
            </FyrstFlyoutRoot>
        </div>
    </ShowcaseContainer>
</template>

<script setup lang="ts">
import { css } from 'styled-system/css';
</script>

<style scoped>
.flyout-enter-active,
.flyout-leave-active {
  transition: all 200ms;
}
.flyout-enter-from, .flyout-leave-to {
  opacity: 0;
}
</style>
