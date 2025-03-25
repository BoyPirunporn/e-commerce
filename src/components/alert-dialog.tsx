import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { useStoreAlert } from "@/zustandStore/store-alert";

export function AlertDialogDemo() {
  const {
    open,
    variant,
    message,
    onClose,
    callback
  } = useStoreAlert();
  return (
    <AlertDialog open={open} onOpenChange={state => !state && onClose()}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{variant === "default" ? "Alert" : variant.toUpperCase()}</AlertDialogTitle>
          <AlertDialogDescription>
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row gap-2 ml-auto">
          <AlertDialogCancel >Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => callback ? callback() : null}>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
