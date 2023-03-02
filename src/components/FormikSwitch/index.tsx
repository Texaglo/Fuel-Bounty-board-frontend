//import useId from "@mui/material/utils/useId";
import { useFormikContext } from "formik";
import { ComponentProps } from "react";
import Switch from "../Switch";

type FormikSwitch = {
  name: string;
  label: string;
} & Omit<ComponentProps<"input">, "name">;

const FormikSwitch = ({ name, value, ...props }: FormikSwitch) => {
  const { values, setFieldValue } = useFormikContext();
  //const id = useId();

  const checked = (values as any)[name] === value;

  return (
    <Switch
      {...(props as any)}
      checked={checked}
      onChange={(e) => {
        if (!e.target.checked) {
          setFieldValue(name, "");
        } else {
          setFieldValue(name, e.target.value);
        }
      }}
      value={value}
    />
  );

  // return (
  //   <div className="form-check form-switch form-check-inline text-start d-table-cell">
  //     <input
  //       {...props}
  //       checked={checked}
  //       onChange={(e) => {
  //         if (!e.target.checked) {
  //           setFieldValue(name, "");
  //         } else {
  //           setFieldValue(name, e.target.value);
  //         }
  //       }}
  //       value={value}
  //       type="checkbox"
  //       id="value"
  //     />
  //     <label className="form-check-label" htmlFor="id">
  //       {label}
  //     </label>
  //   </div>
  // );
};

export default FormikSwitch;
