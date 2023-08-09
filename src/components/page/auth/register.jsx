import { MyTextInput } from "../../utils/input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import "./auth.css";
import { Link } from "react-router-dom";
YupPassword(Yup);

export default function Register() {
  const submitHandle = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="login_container">
        <div className="login_msg">
          <h2>Register</h2>
          <p>Create your Account</p>
        </div>
        <div className="login_sm">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              referral: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              fullName: Yup.string().min(3).required("Name is required"),

              email: Yup.string()
                .email("Invalid email address")
                .required("Email address is required"),

              phoneNumber: Yup.number()
                .integer("Number Only")
                // .max(11)
                .required("Phone Number is required"),

              referral: Yup.string().min(10).length(10),

              password: Yup.string()
                .min(8, "password must up to 8 character")
                .minLowercase(1, "password must have one lowercase")
                .minUppercase(1, "password must have one uppercase")
                .minNumbers(1, "password must have one number")
                .minSymbols(1, "password must have one symbol")
                .required("Password is required"),
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
              <MyTextInput
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="Enter Your Full Name"
                autoComplete="off"
              />

              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Somebody@gmail.com"
                autoComplete="off"
              />

              <MyTextInput
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                placeholder="Enter Your Mobile Number"
                autoComplete="off"
              />

              <MyTextInput
                label="Referral"
                name="Referral"
                type="text"
                placeholder="Optional"
                autoComplete="off"
              />

              <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="off"
              />
              <MyTextInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Reenter your password"
                autoComplete="off"
              />

              <div className="spin_container">
                <button
                  //   disabled={loading ? true : null}
                  type="submit"
                  className="btn_login mt-3"
                >
                  Create Account
                </button>
              </div>
            </Form>
          </Formik>

          <div className="login_footer">
            <p>
              Already A Member
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
