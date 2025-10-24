<script setup lang="ts">
import { css } from 'styled-system/css';

export interface FormPromptProps {
    /** Action URL for the form submission */
    action: string;
    /** HTTP method for the form submission */
    method: 'get' | 'post';
    /** ID attribute for the form */
    id: string;
    /** Name attribute for the form */
    name: string;
    /** Accessible label for screen readers */
    ariaLabel?: string;
    /** Placeholder text for the textarea */
    placeholder?: string;
}

withDefaults(defineProps<FormPromptProps>(), {
    method: 'post',
    ariaLabel: undefined,
    placeholder: undefined,
});
</script>

<template>
    <form
        ref="promptForm"
        :action="action"
        :method="method"
        :id="id"
        :name="name"
        :aria-label="ariaLabel"
        :class="css({
            containerType: 'inline-size',
            display: 'flex',
            flexDirection: 'column',
            gap: 'xl',
            width: '100%',
            bgColor: 'grey.night',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'grey.600',
            borderRadius: '2xl',
            padding: 'xl',
            outlineWidth: '3px',
            outlineStyle: 'solid',
            outlineOffset: '0px',
            outlineColor: 'transparent',
            transition: 'all 200ms',
            _light: {
                bgColor: 'white',
                borderColor: 'grey.200',
            },
        })">
        <slot name="parameter" />
        <slot name="textarea">
            <textarea 
                name="message"
                :class="css({
                    color: 'neutral',
                    padding: 'xs',
                    resize: 'none',
                    fieldSizing: 'content',
                    _focus: {
                        outline: 'none',
                    },
                })"
                :style="{
                    minHeight: 'var(--textarea-min-h, 120px)',
                    maxHeight: 'var(--textarea-max-h, 300px)',
                }"
                :placeholder="placeholder"
            />
        </slot>
        <slot name="footer" />
    </form>
</template>
