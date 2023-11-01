import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils";


interface CreatePetTaskProps {
  pets: { id: string; name: string }[];
}

export const CreatePetTask: React.FC<CreatePetTaskProps> = ({ pets }) => {
  if (pets.length === 1) {
    return (
      <a href={`pets/${pets[0].id}/tasks/new`} className={buttonVariants()}>
        Create a new task
      </a>
    )
  }

  if (pets.length > 1) {
    return (
      <Dialog>
        <DialogTrigger asChild><Button>Create a new task</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Which pet are we creating the new task?</DialogTitle>

            <div className="space-y-2 pt-4">
              {pets.map((pet) => (
                <a key={pet.id} href={`pets/${pet.id}/tasks/new`} className={cn(buttonVariants(), 'w-full')}>{pet.name}</a>
              ))}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return null
}