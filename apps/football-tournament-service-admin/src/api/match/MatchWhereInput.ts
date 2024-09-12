import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MatchWhereInput = {
  dateTime?: DateTimeNullableFilter;
  fieldField?: StringNullableFilter;
  id?: StringFilter;
  region?: JsonFilter;
  status?: "Option1";
};
