export type ControlSize = 'sm' | 'md' | 'lg'
export type ControlValid = true | false | 'none'

export type ControlInputType
  = | 'text'
    | 'email'
    | 'url'
    | 'tel'
    | 'search'
    | 'password'
    | 'number'
    | 'date'

export type FieldOption = {
  label: string
  value: string
  disabled?: boolean
}
