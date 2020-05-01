export class Utility {
    public static isNullOrUndefined(value: any) {
        return value === null || value === undefined;
    }

    public static isFunction(fn: any): boolean {
        return fn instanceof Function || typeof fn === "function";
    }
}

