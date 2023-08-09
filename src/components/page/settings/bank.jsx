import { Form, Formik } from "formik";
import { MyTextInput } from "../../utils/input";
import * as Yup from "yup";

export default function BankSettings() {
  const bankHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="container">
        <div className="user_profile_container">
          <h5>Bank Information</h5>
          <Formik
            initialValues={{
              bankName: "",
              accountNumber: "",
              accountName: "",
            }}
            validationSchema={Yup.object({
              bankName: Yup.string()
                .required("Require")
                .min(3, "Bank Name should be greater than or equal to 3"),
              accountNumber: Yup.number().positive().required("Require"),
              accountName: Yup.string()
                .required()
                .min(10, "Account name should not be less than 10"),
            })}
            onSubmit={(values, { resetForm }) => {
              bankHandler(values);
              resetForm();
            }}
          >
            <Form>
              <div className="row row-cols-sm-2 row-cols-1">
                <div className="col">
                  <MyTextInput
                    name="bankName"
                    type="text"
                    placeholder="Enter Bank Name"
                    autoComplete="off"
                  />
                </div>

                <div className="col">
                  <div className="mt-2">
                    <MyTextInput
                      name="accountNumber"
                      type="number"
                      placeholder="Enter Account Number e.g 813 0000 000"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="mt-2">
                    <MyTextInput
                      name="accountName"
                      type="text"
                      placeholder="Enter your Account Name"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="spin_container">
                    <button
                      //   disabled={loading ? true : null}
                      type="submit"
                      className="btn_pays"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
