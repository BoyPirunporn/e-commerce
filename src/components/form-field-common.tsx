'use client';
import { Control, FieldPath, FieldValues, Path, PathValue } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

// Generic interface for controller props
export declare interface UseControllerProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    name: TName;
    control: Control<TFieldValues>;
    placeholder?: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    description?: string | null;
    disabled?: boolean;
    readOnly?: boolean;
    hidden?: boolean;
    defaultValue?: PathValue<TFieldValues, TName>;
}

// FormFieldCommon component
export const FormFieldCommon = <
    T extends FieldValues,
>({
    control,
    name,
    placeholder,
    label,
    description,
    type = "text",
    disabled = false,
    readOnly = false,
    hidden = false,
    defaultValue
}: UseControllerProps<T>) => {

    return (
        <FormField
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({ field, ...props }) => {
                return (
                    <FormItem>
                        {label ? <FormLabel>{label}</FormLabel> : null}
                        <FormControl>
                            <Input
                                {...field}
                                type={type}
                                hidden={hidden}
                                readOnly={readOnly}
                                onChange={(e) => {
                                    field.onChange(
                                        type === "number" ? parseFloat(e.target.value) || 0 : e.target.value
                                    );
                                }}
                                placeholder={placeholder ? placeholder : "Enter your " + name}
                                disabled={disabled}
                                className='rounded-lg'
                            />
                        </FormControl>
                        {description ? <FormDescription className='text-xs text-gray-500'>{description}</FormDescription> : null}
                        <FormMessage className='mb-2' />
                    </FormItem>
                )
            }} />
    );
};
