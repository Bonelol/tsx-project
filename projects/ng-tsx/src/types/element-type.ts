import { ComponentType } from './component-type';
import { Child } from './types';

export interface ElementType<P = any> {
    type: string | ComponentType<P>
    children: Child[]
    props: P | null
  }