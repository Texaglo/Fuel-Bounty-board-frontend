import { modalStyles } from "@/config/constants";
import useSendEmail from "@/hooks/useSendEmail";
import { Formik } from "formik";
import { useState } from "react";
import Modal from "react-modal";
import * as Yup from "yup";
import { addDataToDB } from "../../../supabase";
import ConfirmSubmissionFrom from "../ConfirmSubmissionFrom";
import ConnectOnPcToUseButton from "../ConnectOnPcToUseButton";
import FormikErrorMessage from "../FormikErrorMessage";
import FormikInput from "../FormikInput";
import FormikSwitch from "../FormikSwitch";
import FormikTextarea from "../FormikTextarea";

const initialValues = {
  first: "",
  last: "",
  "user-email": "",
  budget: "",
  down_payment: "",
  payment_split: "",
  treasury_address: "",
  bit_bucket: "",
  start: "",
  end: "",
  message: "",
  project: "",
};

const validationSchema = Yup.object().shape({
  first: Yup.string().required().label("First name"),
  last: Yup.string().required().label("Last name"),
  "user-email": Yup.string().email().required().label("Email"),
  budget: Yup.string().required().label("Budget"),
  down_payment: Yup.string().required().label("Down payment"),
  payment_split: Yup.string().required().label("Payment split"),
  treasury_address: Yup.string().required().label("Treasury address"),
  bit_bucket: Yup.string().required().label("Bitbucket"),
  start: Yup.string().required().label("Start date"),
  end: Yup.string().required().label("End date"),
  message: Yup.string().required().label("Description"),
  project: Yup.string().required().label("Project type"),
});

const keys = {
  first: "First name",
  last: "Last name",
  "user-email": "Email",
  budget: "Budget",
  down_payment: "Down payment",
  payment_split: "Payment split",
  treasury_address: "Treasury address",
  bit_bucket: "Bitbucket",
  start: "Start date",
  end: "End date",
  message: "Description",
  project: "Project type",
};

const DevelopAProjectForm = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const dataSubmit = async (values: any) => {
    const data = {
      first: values["first"],
      last: values["last"],
      userEmail: values["user-email"],
      budget: values["budget"],
      project: values["project"],
      message: values["message"],
      start: values["start"],
      end: values["end"],
      treasuryWallet: values["treasury_address"],
      downPayment: values["down_payment"],
      splitPercentage: values["payment_split"],
      bitBucketLink: values["bit_bucket"],
    };
    await addDataToDB(data);
  };

  const { sendEmail, isSubmitting } = useSendEmail({
    templateId: "template_2x1e6lj",
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
                  {/** Inputs --Start-- */}
                  <div className="__inputs_wrapper">
                    <div>
                      <FormikInput
                        className="form-control"
                        type="text"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip
                        name="first"
                        placeholder="First Name"
                        title="Put your first name here"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="text"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip
                        name="last"
                        placeholder="Last Name"
                        title="Put your last name here"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="email"
                        name="user-email"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip
                        placeholder="Email Address"
                        inputMode="email"
                        title="Put your Email here"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="number"
                        name="budget"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip
                        title="Put your budget here"
                        placeholder="Enter Your Budget"
                        inputMode="numeric"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="number"
                        name="down_payment"
                        placeholder="Down Payment Amount"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip
                        title="Put your down payment here"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="text"
                        name="payment_split"
                        placeholder="Split %"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip
                        title="Put your split here"
                      />
                    </div>
                    <div>
                      <a
                        href="https://www.texaglo.com/split"
                        target={"_blank"}
                        className="hidden w-full __btn py-[0.375rem] px-[0.75rem] lg:inline-block"
                      >
                        Use Our Payment Splitter
                      </a>
                      <ConnectOnPcToUseButton
                        style={{
                          background: "#0241FF",
                          color: "white",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="text"
                        name="treasury_address"
                        placeholder="Treasury Address"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip
                        title="Enter your wallet address that will recieve payments"
                      />
                    </div>
                    <div>
                      <FormikInput
                        className="form-control"
                        type="text"
                        name="bit_bucket"
                        placeholder="Image Link"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip
                        title="Put a link to the banner image for your post"
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
                      Select Your Project Type
                    </label>

                    <div className="flex flex-wrap gap-4 mt-2">
                      <FormikSwitch
                        className="form-check-input"
                        type="checkbox"
                        name="project"
                        value="Software"
                        label="Software"
                      />
                      <FormikSwitch
                        className="form-check-input"
                        type="checkbox"
                        name="project"
                        value="Blockchain"
                        label="Blockchain"
                      />

                      <FormikSwitch
                        className="form-check-input"
                        type="checkbox"
                        name="project"
                        value="Consultation"
                        label="Consultation"
                      />

                      <FormikSwitch
                        className="form-check-input"
                        type="checkbox"
                        name="project"
                        value="Web Design"
                        label="Web Design"
                      />
                    </div>
                    <FormikErrorMessage name={"project"} />
                  </div>
                  {/** Checkboxes --End-- */}

                  <div className="col" style={{ marginBottom: "25px" }}>
                    <FormikTextarea
                      className="form-control col-12"
                      style={{
                        textAlign: "left",
                        display: "block",
                        marginTop: "27px",
                        height: "130px",
                        paddingTop: "6px",
                        paddingRight: "6px",
                        paddingBottom: "6px",
                        paddingLeft: "6px",
                      }}
                      name="message"
                      placeholder="Enter your amazing project details for our collaborators..."
                      data-bs-toggle="tooltip"
                      data-bss-tooltip
                      title="Put your Drop your description of your project here"
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px 25px",
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
                          data-bs-toggle="tooltip"
                          data-bss-tooltip
                          title="Put your date"
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
                          name="start"
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
                          name="end"
                          style={{ marginRight: "98px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3.5 mt-4">
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
                  isSubmitting={isSubmitting}
                  open={showConfirmModal}
                  onClose={() => {
                    setShowConfirmModal(false);
                    setShowModal(true);
                  }}
                  title="Confirm Project Details"
                  description="Confirm your project details below:"
                  values={values}
                  keys={keys}
                  onConfirm={() => {
                    sendEmail(values);
                    dataSubmit(values);
                  }}
                />
              </>
            )}
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default DevelopAProjectForm;
