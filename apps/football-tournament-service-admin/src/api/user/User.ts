import { JsonValue } from "type-fest";

export type User = {
  about: string | null;
  accountPhoto: JsonValue;
  birthDate: Date | null;
  blockedDate: Date | null;
  createdAt: Date;
  deletedDate: Date | null;
  dominantFoot?: "Option1" | null;
  email: string | null;
  firstName: string | null;
  id: string;
  isBlocked: boolean | null;
  isDeleted: boolean | null;
  lastLogin: Date | null;
  lastName: string | null;
  physicalInfo: JsonValue;
  profileType?: "Option1" | null;
  region: JsonValue;
  roles: JsonValue;
  surname: string | null;
  updatedAt: Date;
  username: string;
};
