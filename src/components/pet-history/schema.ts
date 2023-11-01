import { z } from "zod";

export const petHistorySchema = z.object({
  id: z.string(),
  petId: z.string(),
  description: z.string(),
  status: z.string(),
  type: z.string(),
  date: z.string(),
  timeZone: z.string(),
});

export type PetHistory = z.infer<typeof petHistorySchema>;
