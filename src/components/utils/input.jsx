import { useField } from "formik";
import "../page/payment/style.css";

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="form-group">
        <label className="form-label mt-2" htmlFor={props.id || props.name}>
          {label}
        </label>
        <input className="input_field" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="input_error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="input_error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} className="input_field" />
      {meta.touched && meta.error ? (
        <div className="input_error">{meta.error}</div>
      ) : null}
    </div>
  );
};
MyTextInput.propTypes;
MyCheckbox.propTypes;
MySelect.propTypes;
