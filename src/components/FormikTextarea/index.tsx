import { useField, useFormikContext } from "formik";
import React, { ComponentProps } from "react";
import FormikErrorMessage from "../FormikErrorMessage";

type InputProps = {
  name: string;
} & Omit<ComponentProps<"textarea">, "name">;

const FormikTextarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ name, style = {}, ...props }, ref) => {
    const [field] = useField(name);
    const { errors, touched } = useFormikContext();
    // const id = useId();

    const isError = errors[name] && touched[name];

    return (
      <div>
        <textarea
          {...field}
          {...props}
          style={{
            ...style,
            ...(isError ? { border: "1px solid red" } : {}),
          }}
          name={name}
        ></textarea>

        <FormikErrorMessage name={name} />
      </div>
    );
  },
);

export default FormikTextarea;
