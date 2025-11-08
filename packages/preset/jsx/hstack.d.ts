/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { HstackProperties } from '../patterns/hstack';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface HstackProps extends HstackProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof HstackProperties > {}


export declare const HStack: FunctionalComponent<HstackProps>