import { FootballTeam as TFootballTeam } from "../api/footballTeam/FootballTeam";

export const FOOTBALLTEAM_TITLE_FIELD = "name";

export const FootballTeamTitle = (record: TFootballTeam): string => {
  return record.name?.toString() || String(record.id);
};
