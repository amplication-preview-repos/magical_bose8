import { JsonValue } from "type-fest";

export type FootballTeam = {
  captain: string | null;
  captainId: number | null;
  createdAt: Date;
  emblem: JsonValue;
  id: string;
  name: string | null;
  playerTeam: string | null;
  teamDescription: string | null;
  teamLineup?: "Option1" | null;
  updatedAt: Date;
};
