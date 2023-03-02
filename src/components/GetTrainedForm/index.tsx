import { modalStyles } from "@/config/constants";
import { Formik } from "formik";
import { useState } from "react";
import Modal from "react-modal";
import * as Yup from "yup";
import useSendEmail from "../../hooks/useSendEmail";
import ConfirmSubmissionFrom from "../ConfirmSubmissionFrom";
import FormikErrorMessage from "../FormikErrorMessage";
import FormikInput from "../FormikInput";
import FormikSwitch from "../FormikSwitch";
import FormikTextarea from "../FormikTextarea";

const initialValues = {
  first: "",
  last: "",
  "user-email": "",
  budget: "",
  training: "",
  message: "",
  start: "",
};
const validationSchema = Yup.object().shape({
  first: Yup.string().required().label("First name"),
  last: Yup.string().required().label("Last name"),
  "user-email": Yup.string().email().required().label("Email"),
  budget: Yup.string().required().label("Budget"),
  training: Yup.string().required().label("Project type"),
  message: Yup.string().required().label("Description"),
  start: Yup.string().required().label("Start date"),
});

const keys = {
  first: "First name",
  last: "Last name",
  "user-email": "Email",
  budget: "Budget",
  training: "Project type",
  message: "Description",
  start: "Start date",
};

const GetTrainedForm = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleClose = () => setShowModal(false);

  const { sendEmail, isSubmitting } = useSendEmail({
    templateId: "template_9nb23vr",
    onSuccess: () => {
      handleClose();
      setShowConfirmModal(false);
    },
  });

  return (
    <>
      <Modal
        style={{
          overlay: {
            ...modalStyles.overlay,
            opacity: showConfirmModal ? "0" : "1",
          },
          content: modalStyles.content,
        }}
        isOpen={showModal}
        onRequestClose={handleClose}
      >
        <div className="__modal_cotent_wrapper">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={() => {
              setShowConfirmModal(true);
            }}
          >
            {({ handleSubmit, values }) => (
              <>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <div className="__inputs_wrapper_get_trained lg:grid-cols-4">
                    <div>
                      <FormikInput
                        className="form-control"
                        type="text"
                        name="first"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="text"
                        name="last"
                        placeholder="Last Name"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="email"
                        name="user-email"
                        placeholder="Email Address"
                        inputMode="email"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="number"
                        name="budget"
                        placeholder="Enter Your Budget"
                        inputMode="numeric"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr,2fr] mt-5">
                    {/** Checkboxes --Start-- */}
                    <div>
                      <label className="form-label fw-semibold">
                        Select Your Training Type
                      </label>

                      <div className="flex flex-col gap-1.5 mt-4">
                        <FormikSwitch
                          label="Blockchain"
                          className="form-check-input"
                          type="checkbox"
                          value="Blockchain"
                          name="training"
                        />

                        <FormikSwitch
                          label="Web 3 Overview"
                          className="form-check-input"
                          type="checkbox"
                          value="Web 3 Overview"
                          name="training"
                        />

                        <FormikSwitch
                          label="Discord Basics"
                          className="form-check-input"
                          type="checkbox"
                          value="Discord Basics"
                          name="training"
                        />

                        <FormikSwitch
                          label="Art Generation"
                          className="form-check-input"
                          type="checkbox"
                          value="Art Generation"
                          name="training"
                        />

                        <FormikSwitch
                          label="Cloud Computing"
                          className="form-check-input"
                          type="checkbox"
                          value="Cloud Computing"
                          name="training"
                        />

                        <FormikErrorMessage name={"training"} />
                      </div>
                    </div>
                    {/** Checkboxes --End-- */}
                    <div>
                      <FormikTextarea
                        className="form-control"
                        style={{
                          textAlign: "left",
                          display: "block",
                          height: "166px",
                          paddingTop: "6px",
                          paddingRight: "6px",
                          paddingBottom: "6px",
                          paddingLeft: "6px",
                        }}
                        name="message"
                        placeholder="Let us know what you'd like to learn, so we can tailor a project for you..."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-[100px,260px] mt-5">
                    <label htmlFor="start" className="flex items-center">
                      Start Date:
                    </label>
                    <FormikInput
                      className="form-control d-inline-block d-xl-flex"
                      type="date"
                      name="start"
                    />
                  </div>
                  <div className="flex justify-end gap-3.5 mt-7">
                    <button
                      className="__btn sm outline"
                      type="button"
                      onClick={handleClose}
                    >
                      Close
                    </button>

                    <button className="__btn sm" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
                <ConfirmSubmissionFrom
                  open={showConfirmModal}
                  onClose={() => {
                    setShowConfirmModal(false);
                    setShowModal(true);
                  }}
                  title="Confirm Project Details"
                  description="Confirm your project details below:"
                  values={values}
                  isSubmitting={isSubmitting}
                  keys={keys}
                  onConfirm={() => sendEmail(values)}
                />
              </>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default GetTrainedForm;
