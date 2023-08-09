import { Form, Formik } from "formik";
import { MyTextInput } from "../../../utils/input";
import * as Yup from "yup";
import "../styles.css";
import { BsWhatsapp } from "react-icons/bs";

export default function Coupon() {
  const submitHandle = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="manual_under">
        <div className="container">
          <div className="manual_header">
            <h5>Coupon code</h5>
          </div>

          <div className="account_details text-center">
            <h6>
              <BsWhatsapp /> Buy Coupon code:
            </h6>
            <p>Contact us on whatsapp to buy your coupon code</p>
            <a href="/">
              <BsWhatsapp /> Whatsapp
            </a>
          </div>

          <div className="manual_form">
            <Formik
              initialValues={{
                coupon_code: "",
              }}
              validationSchema={Yup.object({
                coupon_code: Yup.number()
                  .positive()
                  .required("Require")
                  .min(9, "Coupon code should be greater than or equal to 9"),
              })}
              onSubmit={(values, { resetForm }) => {
                submitHandle(values);
                resetForm();
              }}
            >
              <Form>
                <div className="row row-cols-sm-2 row-cols-1">
                  <div className="col">
                    <MyTextInput
                      name="coupon_code"
                      type="number"
                      placeholder="Enter coupon code"
                      autoComplete="off"
                    />
                  </div>

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
