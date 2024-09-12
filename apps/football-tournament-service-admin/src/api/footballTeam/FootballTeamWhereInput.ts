import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type FootballTeamWhereInput = {
  captain?: StringNullableFilter;
  captainId?: IntNullableFilter;
  emblem?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  playerTeam?: StringNullableFilter;
  teamDescription?: StringNullableFilter;
  teamLineup?: "Option1";
};
