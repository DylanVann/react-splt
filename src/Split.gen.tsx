/* TypeScript file generated by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const SplitBS = require('./Split.bs');

import {reactElement as ReasonReact_reactElement} from './ReactShim.shim';

// tslint:disable-next-line:interface-over-type-literal
export type callback = (_1:number) => void;

export const make: (_1:{
  readonly children: [ReasonReact_reactElement, ReasonReact_reactElement]; 
  readonly maxWidth?: number; 
  readonly minWidth?: number; 
  readonly onDrag?: callback; 
  readonly onDragEnd?: callback; 
  readonly onDragStart?: callback; 
  readonly width?: number
}) => ReasonReact_reactElement = SplitBS.make;
