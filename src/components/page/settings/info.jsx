import { Form, Formik } from "formik";
import { MyTextInput } from "../../utils/input";
import * as Yup from "yup";
import BankSettings from "./bank";
import { Product } from "../../nav/header";

export default function Info() {
  const submitHandle = (value) => {
    console.log(value);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  return (
    <>
      <div className="profile_container">
        <Product productName="Edit Profile" />
        <div className="container">
          <div className="user_profile_container">
            <h5>Profile Information</h5>
            <Formik
              initialValues={{
                username: "",
                phoneNumber: "",
                email: "",
              }}
              validationSchema={Yup.object({
                username: Yup.string().required("Require").min(3),
                phoneNumber: Yup.string()
                  .matches(phoneRegExp, "Phone number is not valid")
                  .required("Required"),
                email: Yup.string().email().max(255),
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
                      name="username"
                      type="text"
                      placeholder="username"
                      autoComplete="off"
                    />
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="phoneNumber"
                        type="tel"
                        inputMode="tel"
                        placeholder="Number e.g 0813 000 0000"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        disabled
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
        <BankSettings />
      </div>
    </>
  );
}
