import { MyTextInput } from "../../../utils/input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles.css";

export default function ManualPay() {
  const submitHandle = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="manual_under">
        <div className="container">
          <div className="manual_header">
            <h5>Bank Payment</h5>
          </div>

          <div className="account_details">
            <div className="d-flex">
              <h6>Bank Name: GTB</h6>
              <h6 className="ms-auto">Bank Account: 2323232323</h6>
            </div>
            <h6>Account Name: Omotoyo Omowumi</h6>
          </div>

          <div className="manual_form">
            <p className="manual_text">
              You can deposit or transfer fund into our account stated above.
              Use your registered username as depositor&apos;s name, narration
              or remarks Your account will be funded as soon as your payment is
              confirmed.
            </p>

            <Formik
              initialValues={{
                bankPaid: "",
                narration: "",
                amount: "",
              }}
              validationSchema={Yup.object({
                bankPaid: Yup.string()
                  .required("Required")
                  .min(3, "Bank name should be greater than or equal to 3"),
                narration: Yup.string()
                  .required("Required")
                  .min(3, "Name should be greater than or equal to 3"),
                amount: Yup.number().positive().required("Require").min(4),
              })}
              onSubmit={(values, { setSubmitting }) => {
                submitHandle(values);
                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <div className="row row-cols-sm-2 row-cols-1">
                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="bankPaid"
                        type="text"
                        placeholder="Bank Paid To"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="narration"
                        type="text"
                        placeholder="Narration"
                        autoComplete="off"
                      />
                      <small className="text_small">
                        Use your name as Narration if it is bank transfer
                      </small>
                    </div>
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="amount"
                        type="number"
                        placeholder="Amount e.g 100, 200"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <p className="text-warning mt-1 manual_text">
                    Manual funding available from 9am to 7pm daily. <br /> Your
                    account will be suspend, if you submit without transfer.
                    <br /> Please note that there is a charge of &#8358;100 if
                    the amount greater than &#8358;9,999.
                  </p>

                  <p className="manual_text">
                    Minimum of N1000 Payments are accepted into any of our bank
                    account stated on this page.
                  </p>

                  <p className="manual_text">
                    If your wallet is not autocredicted within 30minutes after
                    you have been charged by your bank, kindly send evidence of
                    payment to our WhatsApp number number only via 08145619164
                  </p>

                  <div className="col">
                    <div className="spin_container">
                      <button
                        //   disabled={loading ? true : null}
                        type="submit"
                        className="btn_pays"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
