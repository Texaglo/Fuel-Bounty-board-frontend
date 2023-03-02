import React, { CSSProperties } from "react";
import { toast } from "react-toastify";

const ConnectOnPcToUseButton = ({ style = {} }: { style?: CSSProperties }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={() =>
          toast.warn(
            "To use this feature you must use a pc and connect your wallet",
          )
        }
        className="btn btn-primary lg:hidden"
        type="button"
        style={{
          textAlign: "center",
          background: "#ffffff",
          color: "#0241ff",
          fontWeight: "bold",
          borderStyle: "none",
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingRight: "14px",
          paddingLeft: "14px",
          textTransform: "uppercase",
          ...style,
        }}
      >
        connect on pc to use
      </button>
    </div>
  );
};

export default ConnectOnPcToUseButton;
