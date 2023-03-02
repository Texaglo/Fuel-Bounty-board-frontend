import React, { useLayoutEffect, useRef, useState } from "react";
import { SwitchProps } from "./Switch.type";

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, ...props }, ref) => {
    const defaultRef = useRef<HTMLInputElement>();
    const resolvedRef: any = ref || defaultRef;

    const [isOn, setisOn] = useState(false);

    useLayoutEffect(() => {
      if (resolvedRef.current.checked) setisOn(true);

      resolvedRef.current.onchange = (e: any) => {
        setisOn(e.target.checked);
      };
    }, [resolvedRef]);

    return (
      <label className="flex items-center gap-3 cursor-pointer">
        <div>
          <input
            ref={resolvedRef}
            {...props}
            type="checkbox"
            className="__switch"
          />
          <div className="__switch_wrapper">
            <div className="__switch_ball"></div>
          </div>
        </div>
        <p>{label}</p>
      </label>
    );
  },
);

Switch.displayName = "Switch";
export default Switch;
