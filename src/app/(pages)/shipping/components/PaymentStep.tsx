import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { EachElement } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { paymentMethod, ShippingFormZod } from '../schema/shipping-schema';

type Props = {};

const PaymentStep = (props: Props) => {
  const form = useFormContext<ShippingFormZod>();
  return (
    <motion.div>
      <FormField
        control={form.control}
        name='payment.paymentMethod'
        render={({ field }) => (
          <FormControl>
            <FormItem>
              <RadioGroup>
                <EachElement
                  of={Object.keys(paymentMethod.Values)}
                  render={(item, index) => {
                    return (
                      <div className="flex flex-row gap-2">
                         <RadioGroupItem key={index} value={item} />
                         <Label>{item}</Label>
                      </div>
                    );
                  }}
                />
              </RadioGroup>
            </FormItem>
          </FormControl>
        )}
      />
    </motion.div>
  );
};

export default PaymentStep;