import { JsonValue } from "type-fest";

export type Match = {
  createdAt: Date;
  dateTime: Date | null;
  fieldField: string | null;
  id: string;
  region: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
