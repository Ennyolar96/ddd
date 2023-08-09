import { Form, Formik } from "formik";
import { MyTextInput } from "../../utils/input";
import * as Yup from "yup";

export default function Pin() {
  const submitHandle = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="profile_container">
        <div className="container">
          <div className="user_profile_container">
            <h5>Change Password</h5>
            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
                pin: "",
              }}
              validationSchema={Yup.object({
                oldPassword: Yup.string().required("Require").min(3),
                newPassword: Yup.string().required("Required"),
                confirmPassword: Yup.string(),
                pin: Yup.string(),
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
                      name="oldPassword"
                      type="text"
                      placeholder="Enter Old Password"
                      autoComplete="off"
                    />
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="newPassword"
                        type="password"
                        placeholder="Enter Your New Password"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="mt-2">
                      <MyTextInput
                        name="pin"
                        type="password"
                        placeholder="Enter Your Transaction Pin"
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
      </div>
    </>
  );
}
