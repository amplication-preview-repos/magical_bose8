import { InputJsonValue } from "../../types";

export type FootballTeamCreateInput = {
  captain?: string | null;
  captainId?: number | null;
  emblem?: InputJsonValue;
  name?: string | null;
  playerTeam?: string | null;
  teamDescription?: string | null;
  teamLineup?: "Option1" | null;
};
