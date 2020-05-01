interface String {
    isNullOrWhiteSpace(): boolean;
    toLower(): string;
    toUpper(): string;
    capitalize(): string;
    startsWith(searchString: string): boolean;
    endsWith(searchString: string): boolean;
    contains(searchString: string, ignoreCase: boolean): any;
    isEmail(): boolean;
    isGUId(): boolean;
    trimExcess(length: number): string;
    stripTags(): string;
    stripNumeric(): string;
    stripNonNumeric(): string;
    isAlphaNumeric(): boolean;
    isAlpha(): boolean;
    isLowerCase(): boolean;
    isUpperCase(): boolean;
    toBoolean(): boolean;
    toFloat(precision: number): number;
    toInt(): number;
    takeFrom(startIndex: number): string;
    takeTo(endIndex: number): string;
    countOf(searchString: string): number;
    in(params: any): boolean;
}
