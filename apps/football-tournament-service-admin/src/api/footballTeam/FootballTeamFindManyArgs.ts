import { FootballTeamWhereInput } from "./FootballTeamWhereInput";
import { FootballTeamOrderByInput } from "./FootballTeamOrderByInput";

export type FootballTeamFindManyArgs = {
  where?: FootballTeamWhereInput;
  orderBy?: Array<FootballTeamOrderByInput>;
  skip?: number;
  take?: number;
};
