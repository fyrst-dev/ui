/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { VstackProperties } from '../patterns/vstack';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface VstackProps extends VstackProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof VstackProperties > {}


export declare const VStack: FunctionalComponent<VstackProps>