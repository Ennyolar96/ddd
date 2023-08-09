import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../../utils/input";
import Confirm from "../../helper/confirm";
import { useState } from "react";
import "./style.css";
import { Product } from "../../nav/header";

export default function Airtime() {
  const [confirm, setConfirm] = useState(false);
  const [form, setForm] = useState();

  const submitHandle = (value) => {
    setForm(value);
    setConfirm(true);
  };

  //send the dat to the database
  const purchase = (sendValue) => {
    console.log("inside Airtime component", sendValue);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const PathName = window.location.pathname;

  return (
    <>
      {PathName === "/airtime" ? <Product productName="Airtime" /> : ""}
      <div className={PathName === "/airtime" ? "airtime_container" : ""}>
        <div className={PathName === "/airtime" ? "container" : ""}>
          <Formik
            initialValues={{
              networkType: "",
              airtimeType: "",
              phoneNumber: "",
              amount: "",
            }}
            validationSchema={Yup.object({
              networkType: Yup.string()
                .oneOf(["1", "2", "3", "4"], "Invalid Network Type")
                .required("Required"),
              airtimeType: Yup.string()
                .oneOf(["1", "2", "3"], "Invalid Network Type")
                .required("Required"),
              phoneNumber: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Required"),
              amount: Yup.number().positive().required("Require").min(3),
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
              <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1">
                <div className="col">
                  <MySelect name="networkType">
                    <option value="">Network</option>
                    <option value="1">MTN</option>
                    <option value="2">GLO</option>
                    <option value="3">AIRTEL</option>
                    <option value="4">9MOBILE</option>
                  </MySelect>
                </div>

                <div className="col">
                  <MySelect name="airtimeType">
                    <option value="">Airtime Type</option>
                    <option value="1">VTU</option>
                    <option value="2">SHARE &apos;N&apos; SELL </option>
                    <option value="3">AWUF 4 U</option>
                  </MySelect>
                </div>

                <div className="col">
                  <MyTextInput
                    name="phoneNumber"
                    type="tel"
                    inputMode="tel"
                    placeholder="Number e.g 0813 000 0000"
                    autoComplete="off"
                  />
                </div>

                <div className="col">
                  <MyTextInput
                    name="amount"
                    type="text"
                    placeholder="Amount e.g 100, 200"
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
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>

        {/* collect the pin */}
        {confirm && (
          <Confirm
            setConfirm={setConfirm}
            confirm={confirm}
            form={form}
            purchase={purchase}
          />
        )}
      </div>
    </>
  );
}
