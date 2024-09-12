import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const FootballTeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="captain" source="captain" />
        <NumberInput step={1} label="captainId" source="captainId" />
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="playerTeam" source="playerTeam" />
        <TextInput label="teamDescription" multiline source="teamDescription" />
        <SelectInput
          source="teamLineup"
          label="teamLineup"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
