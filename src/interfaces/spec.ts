export interface ISpecAttribute {
    titulo: string;
    des: string;
}

export interface ISpecGroup {
    name: string;
    attributes: ISpecAttribute[];
}

export type ISpec = ISpecGroup[];
