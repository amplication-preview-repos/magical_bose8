import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FootballTeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="captain" source="captain" />
        <TextField label="captainId" source="captainId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="emblem" source="emblem" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="playerTeam" source="playerTeam" />
        <TextField label="teamDescription" source="teamDescription" />
        <TextField label="teamLineup" source="teamLineup" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
