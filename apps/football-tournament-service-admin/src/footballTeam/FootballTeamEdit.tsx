import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const FootballTeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
