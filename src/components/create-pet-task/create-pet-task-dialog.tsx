import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils";


interface CreatePetTaskDialogProps {
  pets: { id: string; name: string }[];
  buttonLabel: string;
  dialogTitle: string;
  lang: string;
}

export const CreatePetTaskDialog: React.FC<CreatePetTaskDialogProps> = ({ pets, buttonLabel, dialogTitle, lang }) => (
  <Dialog>
    <DialogTrigger asChild><Button>{buttonLabel}</Button></DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{dialogTitle}</DialogTitle>

        <div className="space-y-2 pt-4">
          {pets.map((pet) => (
            <a key={pet.id} href={`/${lang}/pets/${pet.id}/tasks/new`} className={cn(buttonVariants(), 'w-full')}>{pet.name}</a>
          ))}
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)
