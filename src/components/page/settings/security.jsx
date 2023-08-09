import { Form, Formik } from "formik";
import { MyTextInput } from "../../utils/input";
import * as Yup from "yup";
import Pin from "./pin";
import { Product } from "../../nav/header";

export default function Security() {
  const submitHandle = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="profile_container">
        <Product productName="Edit Profile" />
        <div className="container">
          <div className="user_profile_container">
            <h5>Change Password</h5>
            <Formik
              initialValues={{
                oldPin: "",
                newPin: "",
                confirmPin: "",
                password: "",
              }}
              validationSchema={Yup.object({
                oldPin: Yup.string().required("Require").min(3),
                newPin: Yup.string().required("Required"),
                confirmPin: Yup.string(),
                password: Yup.string(),
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
                      name="oldPin"
                      type="password"
                      placeholder="Enter Old Pin"
                      autoComplete="off"
                    />
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="newPin"
                        type="password"
                        placeholder="Enter Your New Pin"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="confirmPin"
                        type="password"
                        placeholder="Confirm Pin"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="password"
                        type="password"
                        placeholder="Enter Your Login Password"
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
        <Pin />
      </div>
    </>
  );
}
