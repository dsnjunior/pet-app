import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import type { Row, Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { types } from "./data";
import { petHistorySchema } from "./schema";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  table: Table<TData>;
}

export function DataTableRowActions<TData>({
  row,
  table,
}: DataTableRowActionsProps<TData>) {
  const petHistory = petHistorySchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem asChild>
          <a href={`/pets/${petHistory.petId}/tasks/${petHistory.id}`}>Edit</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={`/pets/${petHistory.petId}/tasks/${petHistory.id}/duplicate`}
          >
            Make a copy
          </a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Types</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={petHistory.type}>
              {types.map((type) => (
                <DropdownMenuRadioItem
                  key={type.value}
                  value={type.value}
                  onSelect={() => {
                    const data = new FormData();
                    data.append("type", type.value);

                    fetch(
                      `/pets/${petHistory.petId}/tasks/${petHistory.id}/partials/form`,
                      {
                        method: "POST",
                        body: data,
                      },
                    );
                    // @ts-ignore
                    table.options.meta?.updateRow(row, { type: type.value });
                  }}
                >
                  {type.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            fetch(`/pets/${petHistory.petId}/tasks/${petHistory.id}`, {
              method: "DELETE",
            });
            // @ts-ignore
            table.options.meta?.removeRow(row);
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
