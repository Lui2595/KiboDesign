export interface IList<T> {
    /** Array of list items. */
    data: T[];
}

export interface IPaginatedList<T> extends IList<T> {
    /** Current page. */
    current_page: number;

    /** Items per page. */
    per_page: number;

    /** Sorting algorithm. */
    sort?: string;

    /** Total items in list. Not a items.length. */
    total: number;

    /** Total number of pages. */
    pages: number;

    /** Common number of the first item on the current page. */
    from: number;

    /** Common number of the last item on the current page. */
    to: number;

    meta?:any;
}

export interface IFilterableList<T, F> extends IList<T> {
    filters: F[];
}

export interface IListOptions {
    sort?: string;
    limit?: number;
    page?: number;
    pageUrl?: any;
}

export interface IFilterValues {
    [filterSlug: string]: string;
}
