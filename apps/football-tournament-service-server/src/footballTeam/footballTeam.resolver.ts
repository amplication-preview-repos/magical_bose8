import * as graphql from "@nestjs/graphql";
import { FootballTeamResolverBase } from "./base/footballTeam.resolver.base";
import { FootballTeam } from "./base/FootballTeam";
import { FootballTeamService } from "./footballTeam.service";

@graphql.Resolver(() => FootballTeam)
export class FootballTeamResolver extends FootballTeamResolverBase {
  constructor(protected readonly service: FootballTeamService) {
    super(service);
  }
}
