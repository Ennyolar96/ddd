import { MyTextInput } from "../../utils/input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import "./auth.css";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
YupPassword(Yup);

export default function Login() {
  const submitHandle = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="login_container">
        <div className="login_msg">
          <h2>Sign into your Account</h2>
          <p>Sign in to your Account</p>
        </div>
        <div className="login_sm">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),

              password: Yup.string()
                .min(8, "password must up to 8 character")
                .minLowercase(1, "password must have one lowercase")
                .minUppercase(1, "password must have one uppercase")
                .minNumbers(1, "password must have one number")
                .minSymbols(1, "password must have one symbol")
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
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="somebody@gmail.com"
                autoComplete="off"
              />
              <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="password"
                autoComplete="off"
              />

              <Link to="" className="forget">
                Forget Password
              </Link>

              <div className="spin_container">
                <button
                  //   disabled={loading ? true : null}
                  type="submit"
                  className="btn_login mt-3"
                >
                  Authorizes
                </button>
              </div>
            </Form>
          </Formik>

          <div className="social_log mt-4">
            <h6 className="text-center my-4 line_text">Or Login With </h6>
            <div className="d-flex ">
              <button>
                {" "}
                <AiOutlineGoogle size={25} /> Google{" "}
              </button>
              <button className="ms-auto">
                {" "}
                <AiFillFacebook size={25} /> Facebook{" "}
              </button>
            </div>
          </div>

          <div className="login_footer">
            <p>
              Become Member
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
