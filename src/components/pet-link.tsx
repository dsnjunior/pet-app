import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";
import { getInitials } from "@/lib/utils";

interface PetLinkProps {
  pet: {
    id: string;
    name: string;
    type: string;
    birthday: string;
  };
}

export const PetLink: React.FC<PetLinkProps> = ({ pet }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button asChild variant="link">
          <a href={`/pets/${pet.id}`}>{pet.name}</a>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <Avatar className="shrink-0">
            <AvatarImage src={undefined} />
            <AvatarFallback>{getInitials(pet.name)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 w-full">
            <h4 className="text-sm font-semibold">{pet.name}</h4>
            <p className="text-sm">
              The {pet.type} {pet.name}
            </p>
            {pet.birthday && (
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Born on {pet.birthday}
                </span>
              </div>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
