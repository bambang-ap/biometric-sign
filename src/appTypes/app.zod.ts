import {z} from 'zod';

export type TNotes = z.infer<typeof tNotes>;
export const tNotes = z.object({
  id: z.string(),
  title: z.string(),
  notes: z.string(),
  date: z.string(),
});
