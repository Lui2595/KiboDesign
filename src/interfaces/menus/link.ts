export interface ILink {
    icon: string;
    icon2?: string | null | undefined;
    title: string;
    url?: string;
    props?: {
        target?: '_blank';
    };
}

export interface INestedLink extends ILink {
    children?: this[];
}
