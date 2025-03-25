import { FormFieldCommon } from '@/components/form-field-common';
import { Form } from '@/components/ui/form';
import { ShippingAddress } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorOption, Field, FieldArray, FieldArrayPath, FieldError, FieldErrors, FieldName, FieldRefs, FieldValues, FormState, InternalFieldName, RegisterOptions, SubmitErrorHandler, SubmitHandler, useForm, UseFormRegisterReturn } from 'react-hook-form';
import { z } from 'zod';

const shippingAddress: z.ZodType<ShippingAddress> = z.object({
    recipientName: z.string().min(6),
    phoneNumber: z.string().min(8),
    addressLine1: z.string().min(1),
    province: z.string().min(1),
    district: z.string().min(1),
    subDistrict: z.string().min(1),
    postalCode: z.string().min(5),
});
type ShippingAddressZod = z.infer<typeof shippingAddress>;
const ShippingStep = ({
    callback
}: {
    callback: (address: ShippingAddressZod) => void;
}) => {
    const form = useForm<ShippingAddressZod>({
        resolver: zodResolver(shippingAddress),
        defaultValues: {
            recipientName: "",
            phoneNumber: "",
            addressLine1: "",
            province: "",
            district: "",
            subDistrict: "",
            postalCode: "",
        }
    });
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(callback)} className="flex flex-col mt-10 gap-5 w-full max-w-md mx-auto">
                <FormFieldCommon label="Recipient Name" name={"recipientName"} control={form.control} />
                <FormFieldCommon label="Phone Number" name={"phoneNumber"} control={form.control} />
                <FormFieldCommon label="Address" name={"addressLine1"} control={form.control} />
                <FormFieldCommon label="Province" name={"province"} control={form.control} />
                <FormFieldCommon label="District" name={"district"} control={form.control} />
                <FormFieldCommon label="Sub District" name={"subDistrict"} control={form.control} />
                <FormFieldCommon label="Postal Code" name={"postalCode"} control={form.control} />
            </form>
        </Form>

    );
};

export default ShippingStep;