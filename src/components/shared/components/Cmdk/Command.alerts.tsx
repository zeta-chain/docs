import { Microscope } from "lucide-react";

import { Alert } from "./ui";


export const IncludeSchemaAlert = () => (
  <Alert
    variant={"warning"}
    title="Project metadata (tables, columns, and data types) is being shared with OpenAI"
    withIcon
    className="mx-3"
  >
    Start a new conversation to change this configuration
  </Alert>
);

export const ExcludeSchemaAlert = () => (
  <Alert
    variant={"info"}
    title="Project metadata (tables, columns, and data types) is not being shared with OpenAI"
    withIcon
    className="mx-3"
  >
    Start a new conversation to change this configuration
  </Alert>
);
