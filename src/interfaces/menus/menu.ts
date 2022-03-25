import { INestedLink } from './link'
 {/* 
  // @ts-ignore */}
export interface IMenuItem extends INestedLink {
    icon?: string;
    icon2?: string;
}

export type IMenu = IMenuItem[];
