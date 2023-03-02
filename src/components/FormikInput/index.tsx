import { useField, useFormikContext } from "formik";
import React, { ComponentProps } from "react";
import FormikErrorMessage from "../FormikErrorMessage";

type InputProps = {
  name: string;
} & Omit<ComponentProps<"input">, "name">;

const FormikInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, style = {}, ...props }, ref) => {
    const [field] = useField(name);
    const { errors, touched } = useFormikContext();
    //const id = useId();

    const isError = errors[name] && touched[name];

    return (
      <div>
        <input
          {...field}
          {...props}
          style={{
            ...style,
            ...(isError ? { border: "1px solid red" } : {}),
          }}
          name={name}
        />

        <FormikErrorMessage name={name} />
      </div>
    );
  },
);

export default FormikInput;
