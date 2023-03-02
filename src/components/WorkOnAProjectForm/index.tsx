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
  "dev-first": "",
  "dev-last": "",
  "user-email": "",
  "dev-wallet": "",
  skill: "",
  "dev-message": "",
  "dev-start": "",
  "dev-end": "",
};

const validationSchema = Yup.object().shape({
  "dev-first": Yup.string().required().label("First name"),
  "dev-last": Yup.string().required().label("Last name"),
  "user-email": Yup.string().email().required().label("Email"),
  "dev-wallet": Yup.string().required().label("Dev wallet"),
  skill: Yup.string().required().label("Skill"),
  "dev-message": Yup.string().required().label("Description"),
  "dev-start": Yup.string().required().label("Start date"),
  "dev-end": Yup.string().required().label("End date"),
});

const keys = {
  "dev-first": "First name",
  "dev-last": "Last name",
  "user-email": "Email",
  "dev-wallet": "Dev wallet",
  skill: "Skill",
  "dev-message": "Description",
  "dev-start": "Start date",
  "dev-end": "End date",
};

const WorkOnAProjectForm = ({
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
            onSubmit={() => {
              setShowConfirmModal(true);
            }}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, values, errors }) => (
              <>
                {console.log({ errors })}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  {/** Inputs --Start-- */}
                  <div className="__inputs_wrapper_get_trained lg:grid-cols-4">
                    <div>
                      <FormikInput
                        className="form-control"
                        type="text"
                        name="dev-first"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="text"
                        name="dev-last"
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
                        type="text"
                        name="dev-wallet"
                        placeholder="Enter Your Dev Wallet"
                        inputMode="numeric"
                      />
                    </div>
                  </div>
                  {/** Inputs --End-- */}
                  {/** Checkboxes --Start-- */}
                  <div className="col">
                    <label
                      className="form-label"
                      style={{
                        display: "block",
                        textAlign: "left",
                        paddingTop: "16px",
                      }}
                    >
                      What is Your Main Skill
                    </label>

                    <div className="flex flex-wrap gap-4 mt-2">
                      <FormikSwitch
                        className="form-check-input"
                        type="checkbox"
                        value="Blockchain"
                        name="skill"
                        label="Blockchain"
                      />

                      <FormikSwitch
                        className="form-check-input"
                        type="checkbox"
                        value="Communications"
                        name="skill"
                        label="Communications"
                      />

                      <FormikSwitch
                        className="form-check-input"
                        type="checkbox"
                        value="Art"
                        name="skill"
                        label="Art"
                      />

                      <FormikSwitch
                        className="form-check-input"
                        type="checkbox"
                        value="Software"
                        name="skill"
                        label="Software"
                      />

                      <FormikSwitch
                        className="form-check-input"
                        type="checkbox"
                        value="Engineering"
                        name="skill"
                        label="Engineering"
                      />
                    </div>
                    <FormikErrorMessage name={"skill"} />
                  </div>
                  {/** Checkboxes --End-- */}
                  <div style={{ marginTop: 25 }}>
                    <FormikTextarea
                      className="form-control col-12"
                      style={{
                        textAlign: "left",
                        display: "block",
                        height: "166px",
                        paddingTop: "6px",
                        paddingRight: "6px",
                        paddingBottom: "6px",
                        paddingLeft: "6px",
                      }}
                      name="dev-message"
                      placeholder="Enter your amazing ideas..."
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px 25px",
                      marginTop: "25px",
                    }}
                  >
                    <div>
                      <div
                        className="col d-table-cell"
                        style={{ marginTop: "0px" }}
                      >
                        <label
                          className="col-form-label d-inline-block"
                          style={{ paddingRight: "10px" }}
                        >
                          Start Date:
                        </label>
                      </div>
                      <div
                        className="col d-table-cell"
                        style={{ marginTop: "0px" }}
                      >
                        <FormikInput
                          className="form-control d-inline-block d-xl-flex"
                          type="date"
                          name="dev-start"
                          style={{ marginRight: "29px" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div
                        className="col d-table-cell"
                        style={{ marginTop: "0px" }}
                      >
                        <label
                          className="col-form-label d-inline-block"
                          style={{ paddingRight: "10px" }}
                        >
                          End Date:
                        </label>
                      </div>
                      <div
                        className="col d-table-cell"
                        style={{ marginTop: "0px" }}
                      >
                        <FormikInput
                          className="form-control d-inline-block"
                          type="date"
                          name="dev-end"
                          style={{ marginRight: "98px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3.5 mt-6">
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
                  </div>{" "}
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

export default WorkOnAProjectForm;
