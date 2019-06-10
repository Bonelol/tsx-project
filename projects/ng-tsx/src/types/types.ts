import { ElementType } from './element-type';

export type Void = null | undefined

export type Text = string | number

export type Node = ElementType | Text | Void

export type Child = Node | Node[]

export type StateChange<S, P> = Partial<S> | ((s: S, p: P) => S)
