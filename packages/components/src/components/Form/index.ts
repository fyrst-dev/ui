import FormInput from './FormInput.vue'
import FormPrompt from './FormPrompt.vue'
import FormPromptFooter from './FormPromptFooter.vue'

// Named export for direct imports
export { FormInput, FormPrompt }

// Default export for namespaced usage: <Form.Input />
export default {
    Input: FormInput,
    Prompt: FormPrompt,
    PromptFooter: FormPromptFooter
}
