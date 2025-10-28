/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { BoxProperties } from '../patterns/box';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface BoxProps extends BoxProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof BoxProperties > {}


export declare const Box: FunctionalComponent<BoxProps>