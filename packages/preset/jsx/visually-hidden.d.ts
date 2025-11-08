/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { VisuallyHiddenProperties } from '../patterns/visually-hidden';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface VisuallyHiddenProps extends VisuallyHiddenProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof VisuallyHiddenProperties > {}


export declare const VisuallyHidden: FunctionalComponent<VisuallyHiddenProps>