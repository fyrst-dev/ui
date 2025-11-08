/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { CqProperties } from '../patterns/cq';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface CqProps extends CqProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof CqProperties > {}


export declare const Cq: FunctionalComponent<CqProps>