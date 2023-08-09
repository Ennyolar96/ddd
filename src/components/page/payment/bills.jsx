import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../../utils/input";
import { useState } from "react";
import Confirm from "../../helper/confirm";
import { Product } from "../../nav/header";

export default function Bills() {
  const [confirm, setConfirm] = useState(false);
  const [form, setForm] = useState();

  const submitHandle = (value) => {
    setForm(value);
    setConfirm(true);
  };

  //send the dat to the database
  const purchase = (sendValue) => {
    console.log("inside cable component", sendValue);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const PathName = window.location.pathname;

  return (
    <>
      {PathName === "/electricity-bills" ? (
        <Product productName="Utility Bills" />
      ) : (
        ""
      )}
      <div
        className={PathName === "/electricity-bills" ? "airtime_container" : ""}
      >
        <div className={PathName === "/electricity-bills" ? "container" : ""}>
          <Formik
            initialValues={{
              discoName: "",
              meterNumber: "",
              meterType: "",
              amount: "",
              customerNumber: "",
            }}
            validationSchema={Yup.object({
              discoName: Yup.string()
                .oneOf(["1", "2", "3", "4"], "Invalid select")
                .required("Required"),
              meterNumber: Yup.number()
                .positive()
                .required("Require")
                .min(9, "Meter Number must be greater than or equal to 9"),
              amount: Yup.number().positive().required("Require").min(3),
              meterType: Yup.string()
                .oneOf(["1", "2"], "Invalid select")
                .required("Required"),

              customerNumber: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .required("Required"),
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
                  <MySelect name="discoName">
                    <option value="">Disco Name</option>
                    <option value="1">Abuja Electricity</option>
                    <option value="2">Eko Electricity</option>
                    <option value="3">Enugu Electricity</option>
                    <option value="4">Ibadan Electricity</option>
                    <option value="5">Ikeja Electricity</option>
                    <option value="6">Jos Electricity</option>
                    <option value="7">Kano Electricity</option>
                    <option value="8">Kaduna Electricity</option>
                    <option value="9">Port Harcourt Electricity</option>
                    <option value="10">Yola Electricity</option>
                  </MySelect>
                </div>

                <div className="col">
                  <MyTextInput
                    name="meterNumber"
                    type="number"
                    placeholder="Meter Number e.g 2200 2200 2000"
                    autoComplete="off"
                  />
                </div>

                <div className="col">
                  <MySelect name="meterType">
                    <option value="">Meter Type</option>
                    <option value="1">Prepaid</option>
                    <option value="2">Postpaid</option>
                  </MySelect>
                </div>

                <div className="col">
                  <MyTextInput
                    name="amount"
                    type="number"
                    placeholder="Amount e.g 500, 1000, 2000"
                    autoComplete="off"
                  />
                </div>

                <div className="col">
                  <MyTextInput
                    name="customerNumber"
                    type="tel"
                    inputMode="tel"
                    placeholder="Customer Number e.g 0803 0000 000"
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
    </>
  );
}
