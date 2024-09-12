import { SortOrder } from "../../util/SortOrder";

export type FootballTeamOrderByInput = {
  captain?: SortOrder;
  captainId?: SortOrder;
  createdAt?: SortOrder;
  emblem?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  playerTeam?: SortOrder;
  teamDescription?: SortOrder;
  teamLineup?: SortOrder;
  updatedAt?: SortOrder;
};
