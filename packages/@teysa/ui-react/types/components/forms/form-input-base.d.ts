export interface FormInputBase {
    error?: string;
    helpText?: string;
    label: string;
    name: string;
    required?: boolean;
}
export declare const getInputClasses: (hasError: boolean) => string;
export declare const getErrorId: (id: string) => string;
export declare const getHelpTextId: (id: string) => string;
export declare const getDescribedBy: (id: string, error?: string, helpText?: string) => string | null;
