import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { paymentMethod, ShippingFormZod } from '../schema/shipping-schema';
import { PaymentMethod } from '@/enum';

const PaymentStep = () => {
  const form = useFormContext<ShippingFormZod>();
  return (
    <motion.div>
      <Accordion type="single" defaultValue={form.formState.defaultValues?.payment?.paymentMethod} collapsible className="w-full">
        <AccordionItem value={paymentMethod.Enum.BANK_TRANSFER}>
          <AccordionTrigger>Mobile Banking</AccordionTrigger>
          <AccordionContent >

          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default PaymentStep;