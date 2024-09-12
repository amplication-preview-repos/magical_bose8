import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FootballTeamServiceBase } from "./base/footballTeam.service.base";

@Injectable()
export class FootballTeamService extends FootballTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
