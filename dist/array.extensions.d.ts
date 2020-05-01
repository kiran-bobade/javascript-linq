declare global {
    interface Array<T> {
        first(): any;
        firstOrDefault(): any;
        last(): any;
        all(predicate: any): boolean;
        any(predicate: any): boolean;
        where(predicate: any): boolean;
        select(selector: any): any;
        sum(): number;
        max(): number;
        min(): number;
        take(length: number): any[];
        takeWhile(predicate: any): any[];
        skip(): any[];
        zip(array2: Array<T>, predicate: any): any[];
        single(predicate: any): boolean;
        unique(): any[];
        removeWhere(predicate: any): any[];
        removeAll(): any[];
        union(array2: Array<T>): any[];
        unionAll(array2: Array<T>): any[];
        contains(value: any): boolean;
    }
}
export {};
