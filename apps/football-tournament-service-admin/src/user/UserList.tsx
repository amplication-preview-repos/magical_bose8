import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="about" source="about" />
        <TextField label="accountPhoto" source="accountPhoto" />
        <TextField label="birthDate" source="birthDate" />
        <TextField label="blockedDate" source="blockedDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deletedDate" source="deletedDate" />
        <TextField label="dominantFoot" source="dominantFoot" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <BooleanField label="isBlocked" source="isBlocked" />
        <BooleanField label="isDeleted" source="isDeleted" />
        <TextField label="lastLogin" source="lastLogin" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="physicalInfo" source="physicalInfo" />
        <TextField label="profileType" source="profileType" />
        <TextField label="region" source="region" />
        <TextField label="Roles" source="roles" />
        <TextField label="surname" source="surname" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
