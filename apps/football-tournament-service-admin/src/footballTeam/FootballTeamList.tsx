import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FootballTeamList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FootballTeams"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
