/* eslint-disable */
import type { FunctionalComponent } from 'vue'
import type { GridProperties } from '../patterns/grid';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export interface GridProps extends GridProperties, DistributiveOmit<HTMLStyledProps<'div'>, keyof GridProperties > {}


export declare const Grid: FunctionalComponent<GridProps>