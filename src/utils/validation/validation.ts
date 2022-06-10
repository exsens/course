export type ValidationType = (value: string) => string | undefined;

export const maxLength =
  (max: string | number): ValidationType =>
  (value: string): string | undefined =>
    value && value.length > max
      ? `Must be ${max} characters or less`
      : undefined;

export const minLength =
  (min: string | number): ValidationType =>
  (value: string): string | undefined =>
    value && value.length < min
      ? `Must be ${min} characters or more`
      : undefined;

export const required = (value: string): string | undefined =>
  value || typeof value === "number" ? undefined : "Required";
