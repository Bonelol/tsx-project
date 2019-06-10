import { Component } from './component';

export interface ComponentType<P = any> {
    new(props: P): Component
  }