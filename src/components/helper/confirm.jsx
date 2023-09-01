import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
import "./style.css";

export default function Confirm({ setConfirm, confirm, form, purchase }) {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleComplete = (pin) => {
    // Get the pin
    const sendValue = { ...form, pin };
    // call the function to send it to the database
    purchase(sendValue);
  };
  return (
    <div>
      <div className="confirm">
        <div className="confirm_sm">
          <div className="close_confirm">
            <button onClick={() => setConfirm(!confirm)}>&times;</button>
          </div>
          <h6 className="line_text">You Are About To Pay</h6>
          <p>Authorize the Transaction</p>
          <MuiOtpInput
            length={5}
            onComplete={handleComplete}
            value={value}
            onChange={handleChange}
            className="my-class-name"
          />
        </div>
      </div>
    </div>
  );
}
Confirm.propTypes;
