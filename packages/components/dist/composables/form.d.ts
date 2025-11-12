import { Ref } from 'vue';
export declare function useFormData(form: HTMLFormElement | null): {
    formData: Readonly<Ref<{
        readonly append: {
            (name: string, value: string | Blob): void;
            (name: string, value: string): void;
            (name: string, blobValue: Blob, filename?: string): void;
            (name: string, value: string | Blob): void;
            (name: string, value: string): void;
            (name: string, blobValue: Blob, filename?: string): void;
        };
        readonly delete: {
            (name: string): void;
            (name: string): void;
        };
        readonly get: {
            (name: string): FormDataEntryValue | null;
            (name: string): Bun.FormDataEntryValue | null;
        };
        readonly getAll: {
            (name: string): FormDataEntryValue[];
            (name: string): Bun.FormDataEntryValue[];
        };
        readonly has: {
            (name: string): boolean;
            (name: string): boolean;
        };
        readonly set: {
            (name: string, value: string | Blob): void;
            (name: string, value: string): void;
            (name: string, blobValue: Blob, filename?: string): void;
            (name: string, value: string | Blob): void;
            (name: string, value: string): void;
            (name: string, blobValue: Blob, filename?: string): void;
        };
        readonly forEach: {
            (callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
            (callbackfn: (value: Bun.FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
        };
        readonly keys: () => IterableIterator<string>;
        readonly values: () => IterableIterator<string>;
        readonly entries: () => IterableIterator<[string, string]>;
    } | null, {
        readonly append: {
            (name: string, value: string | Blob): void;
            (name: string, value: string): void;
            (name: string, blobValue: Blob, filename?: string): void;
            (name: string, value: string | Blob): void;
            (name: string, value: string): void;
            (name: string, blobValue: Blob, filename?: string): void;
        };
        readonly delete: {
            (name: string): void;
            (name: string): void;
        };
        readonly get: {
            (name: string): FormDataEntryValue | null;
            (name: string): Bun.FormDataEntryValue | null;
        };
        readonly getAll: {
            (name: string): FormDataEntryValue[];
            (name: string): Bun.FormDataEntryValue[];
        };
        readonly has: {
            (name: string): boolean;
            (name: string): boolean;
        };
        readonly set: {
            (name: string, value: string | Blob): void;
            (name: string, value: string): void;
            (name: string, blobValue: Blob, filename?: string): void;
            (name: string, value: string | Blob): void;
            (name: string, value: string): void;
            (name: string, blobValue: Blob, filename?: string): void;
        };
        readonly forEach: {
            (callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
            (callbackfn: (value: Bun.FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
        };
        readonly keys: () => IterableIterator<string>;
        readonly values: () => IterableIterator<string>;
        readonly entries: () => IterableIterator<[string, string]>;
    } | null>>;
    jsonData: Readonly<Ref<{
        readonly [x: string]: string;
    } | null, {
        readonly [x: string]: string;
    } | null>>;
};
//# sourceMappingURL=form.d.ts.map