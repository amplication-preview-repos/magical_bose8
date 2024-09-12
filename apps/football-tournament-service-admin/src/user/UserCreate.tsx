import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="about" multiline source="about" />
        <div />
        <DateTimeInput label="birthDate" source="birthDate" />
        <DateTimeInput label="blockedDate" source="blockedDate" />
        <DateTimeInput label="deletedDate" source="deletedDate" />
        <SelectInput
          source="dominantFoot"
          label="dominantFoot"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="isBlocked" source="isBlocked" />
        <BooleanInput label="isDeleted" source="isDeleted" />
        <DateTimeInput label="lastLogin" source="lastLogin" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <div />
        <SelectInput
          source="profileType"
          label="profileType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="surname" source="surname" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
