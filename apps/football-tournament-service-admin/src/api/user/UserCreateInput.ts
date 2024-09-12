import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  about?: string | null;
  accountPhoto?: InputJsonValue;
  birthDate?: Date | null;
  blockedDate?: Date | null;
  deletedDate?: Date | null;
  dominantFoot?: "Option1" | null;
  email?: string | null;
  firstName?: string | null;
  isBlocked?: boolean | null;
  isDeleted?: boolean | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  password: string;
  physicalInfo?: InputJsonValue;
  profileType?: "Option1" | null;
  region?: InputJsonValue;
  roles: InputJsonValue;
  surname?: string | null;
  username: string;
};
