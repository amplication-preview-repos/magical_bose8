import { Module } from "@nestjs/common";
import { FootballTeamModuleBase } from "./base/footballTeam.module.base";
import { FootballTeamService } from "./footballTeam.service";
import { FootballTeamController } from "./footballTeam.controller";
import { FootballTeamResolver } from "./footballTeam.resolver";

@Module({
  imports: [FootballTeamModuleBase],
  controllers: [FootballTeamController],
  providers: [FootballTeamService, FootballTeamResolver],
  exports: [FootballTeamService],
})
export class FootballTeamModule {}
