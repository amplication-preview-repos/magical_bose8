import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "fieldField";

export const MatchTitle = (record: TMatch): string => {
  return record.fieldField?.toString() || String(record.id);
};
