import { decorateClass, getDecoratedClassValue } from './decorator-utils';

export interface TableFieldOptions<T> {
    title?: string
    valueFn?: ((item: T, index) => any)
    component?: string
    sortFn?: (a, b) => number
    filters?: { text: string, value: any }[]
    filterFn?: (value, item: T) => boolean
    filterMultiple?: boolean
}

const TABLE_KEY = 'TABLE';
export const Table = <TItem>(options?: TableFieldOptions<TItem>[]): any => (classType: any) => {
    decorateClass(classType, TABLE_KEY, options);
}

export const getTableOptions = <T>(classType: any): TableFieldOptions<T>[] => {
    return getDecoratedClassValue(classType, TABLE_KEY);
}