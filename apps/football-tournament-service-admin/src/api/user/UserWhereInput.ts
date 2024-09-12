import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  about?: StringNullableFilter;
  accountPhoto?: JsonFilter;
  birthDate?: DateTimeNullableFilter;
  blockedDate?: DateTimeNullableFilter;
  deletedDate?: DateTimeNullableFilter;
  dominantFoot?: "Option1";
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isBlocked?: BooleanNullableFilter;
  isDeleted?: BooleanNullableFilter;
  lastLogin?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  physicalInfo?: JsonFilter;
  profileType?: "Option1";
  region?: JsonFilter;
  surname?: StringNullableFilter;
  username?: StringFilter;
};
