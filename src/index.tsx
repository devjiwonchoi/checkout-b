import { Form, ActionPanel, Action, showToast } from "@raycast/api";

type Values = {
  textfield: string;
  textarea: string;
  datepicker: Date;
  checkbox: boolean;
  dropdown: string;
  tokeneditor: string[];
};

export default function Command() {
  function handleSubmit(values: Values) {
    console.log(values);
    showToast({ title: "Submitted form", message: "See logs for submitted values" });
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description
        text="Generate a new branch name."
      />
      <Form.Dropdown id="dropdown" title="Branch Type">
        <Form.Dropdown.Item value="none" title="none" />
        <Form.Dropdown.Item value="feat" title="feat" />
        <Form.Dropdown.Item value="fix" title="fix" />
        <Form.Dropdown.Item value="refactor" title="refactor" />
      </Form.Dropdown>
      <Form.TextField id="textfield" title="Description" placeholder="Leave blank for a random branch name" />
      <Form.Checkbox id="checkbox" title="Options" label="Include Date" storeValue />
    </Form>
  );
}
