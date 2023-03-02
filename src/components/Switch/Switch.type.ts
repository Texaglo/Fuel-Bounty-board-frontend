export type SwitchProps = {
  type?: "checkbox";
  label?: string;
} & Omit<React.ComponentProps<"input">, "type">;
