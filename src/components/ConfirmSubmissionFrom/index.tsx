import { modalStyles } from "@/config/constants";
import { Fragment } from "react";
import Modal from "react-modal";

type ConfirmSubmissionFromProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  values: any;
  keys: any;
  onConfirm: () => void;
  isSubmitting: boolean;
};

const ConfirmSubmissionFrom = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  values,
  keys,
  isSubmitting,
}: ConfirmSubmissionFromProps) => {
  if (!values || !keys) return null;

  return (
    <Modal isOpen={open} onRequestClose={onClose} style={modalStyles}>
      <div className="__modal_cotent_wrapper">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="text-2xl font-semibold">{title}</h4>
            <button
              onClick={onClose}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <p className="text-start">
              Are You Sure? <br />
              {description}
              <br />
              <br />
              <div className="space-y-1">
                {Object.keys(values).map((val, i) => (
                  <Fragment key={i}>
                    <p>
                      <strong>{keys[val]}</strong>: {values[val]}
                    </p>
                  </Fragment>
                ))}
              </div>
            </p>
          </div>
          <div className="flex gap-3.5 justify-end mt-7">
            <button
              className="__btn sm outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Keep Editing
            </button>
            <button
              className="__btn sm"
              type="button"
              onClick={onConfirm}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait.." : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmSubmissionFrom;
