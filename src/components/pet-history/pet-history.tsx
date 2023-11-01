import { DataTable } from "./data-table";

import { columns } from "./columns";
import type { PetHistory } from "./schema";

export const PetHistoryComponent = ({ data }: { data: PetHistory[] }) => {
  return <DataTable columns={columns} data={data} />;
};
