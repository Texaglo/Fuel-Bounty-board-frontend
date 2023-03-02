import { modalStyles } from "@/config/constants";
import { cx } from "@/utils";
import { ReactNode } from "react";
import ReactModal, { Props } from "react-modal";

type ModalWrapperProps = {
  children?: ReactNode;
  contentWrapperClass?: string;
} & Props;

const ModalWrapper = ({
  children = null,
  contentWrapperClass,
  ...props
}: ModalWrapperProps) => {
  return (
    <>
      <ReactModal {...props} style={modalStyles}>
        <div
          className={cx(
            "w-[90vw] max-h-[80vh] lg:max-h-[95vh] overflow-y-auto overflow-x-hidden sm:w-[550px] lg:w-[750px]",
            contentWrapperClass,
          )}
        >
          {children}
        </div>
      </ReactModal>
    </>
  );
};

export default ModalWrapper;
