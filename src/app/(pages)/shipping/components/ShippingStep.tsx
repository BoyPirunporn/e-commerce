import { FormFieldCommon } from '@/components/form-field-common';
import { useFormContext } from 'react-hook-form';
import { ShippingFormZod } from '../schema/shipping-schema';


const ShippingStep = () => {
    const form = useFormContext<ShippingFormZod>();
    return (
        <div className="flex flex-col mt-10 gap-5 w-full max-w-md mx-auto">
            <FormFieldCommon label="Recipient Name" placeholder='John Doe' name={"shippingAddress.recipientName"} control={form.control} />
            <FormFieldCommon label="Phone Number" placeholder='0987654321' name={"shippingAddress.phoneNumber"} control={form.control} />
            <FormFieldCommon label="Address" placeholder='Address' name={"shippingAddress.addressLine1"} control={form.control} />
            <FormFieldCommon label="Province" placeholder='Province' name={"shippingAddress.province"} control={form.control} />
            <FormFieldCommon label="District" placeholder='District' name={"shippingAddress.district"} control={form.control} />
            <FormFieldCommon label="Sub District" placeholder='Sub district' name={"shippingAddress.subDistrict"} control={form.control} />
            <FormFieldCommon label="Postal Code" placeholder='11111' name={"shippingAddress.postalCode"} control={form.control} />
        </div>

    );
};

export default ShippingStep;