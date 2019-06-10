import { Node, StateChange } from './types'

export abstract class Component<P = any, S = any> {
  state: S
  property: P

  constructor(readonly props: P) {}

  setState(updater: (state: S, property: P) => void, callback?: () => void): void { }

  componentDidMount(): void {}

  shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>): boolean {
    return true
  }

  componentWillUnmount(): void {}

  componentDidCatch(error: Error, info: string): void {}

  abstract render(): Node
}
