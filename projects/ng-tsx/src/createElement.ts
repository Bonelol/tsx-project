import { ComponentType } from './types/component-type';
import { ElementType } from './types/element-type';
import { Child } from './types/types';

export function createElement<P = any>(type: ComponentType<P> | string
    , props?: P
    , ...children: Child[]): ElementType<P> {
  return { type, props: props || null, children }
}
