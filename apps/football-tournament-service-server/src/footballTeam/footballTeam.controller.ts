import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FootballTeamService } from "./footballTeam.service";
import { FootballTeamControllerBase } from "./base/footballTeam.controller.base";

@swagger.ApiTags("footballTeams")
@common.Controller("footballTeams")
export class FootballTeamController extends FootballTeamControllerBase {
  constructor(protected readonly service: FootballTeamService) {
    super(service);
  }
}
