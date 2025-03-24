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
  const alert = useStoreAlert();
  return (
    <AlertDialog open={alert.open} onOpenChange={alert.onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alert.variant === "default" ? "Alert" : alert.variant.toUpperCase()}</AlertDialogTitle>
          <AlertDialogDescription>
            {alert.message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
