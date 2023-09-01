import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import logo from "../../../../assets/paystack-ii.webp";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function PayStack() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [amountErr, setAmountErr] = useState("");

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: amount + "00", //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_1a724f3177fdf5179a18fe4b4d6c1ac64a99949f",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    const { message, status } = reference;

    console.log("the ref is " + reference.reference);
    if (message === "Approved" && status === "success") {
      const option = {
        method: "GET",

        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJpYXQiOjE2OTI1ODcwODMsImV4cCI6MTY5MjU5MDY4MywiZGF0YSI6eyJ1c2VyX2lkIjoiU05ZNEhJSXNWIn19.ruIHX9JmNnGZ46Lr_Hc0XF-xMMe6oSFNd-kmTCjsGIY",
          "Content-Type": "application/json",
        },
      };
      const endpoint = `http://localhost/vtu-api/verify_payment.php?ref=${reference.reference}`;
      fetch(endpoint, option)
        .then((respond) => respond.json())
        .then((data) => {
          console.log(data);
          const { success } = data;

          if (success === true) {
            navigate("/dashboard");
          }
        })
        .catch((e) => console.log(e));
    }
  };

  // you can call this function anything payStack dialog close
  const onClose = () => {
    console.log("closed");
  };

  const PayStackHook = () => {
    const initializePayment = usePaystackPayment(config);

    const payNow = () => {
      if (amount === "") {
        setAmountErr("Amount can not be empty");
        return;
      }

      if (isNaN(amount)) {
        setAmountErr("Amount can only be number");
        return;
      }

      let regex = /^[-+]?[0-9]+\.[0-9]+$/;
      if (regex.test(amount) === true) {
        setAmountErr("Amount should not contain decimal");
        return;
      }

      initializePayment(onSuccess, onClose);
    };

    return (
      <div>
        <button onClick={payNow}>Pay Now</button>
      </div>
    );
  };

  const onChangeValue = (e) => {
    setAmount(e.target.value);
    if (!/^\d+$/.test(e.target.value)) {
      setAmountErr("Enter Number Only");
    }
  };

  return (
    <>
      <div className="container">
        <div className="pay_container">
          <div className="container_sm">
            <div>
              <input
                type="text"
                onChange={onChangeValue}
                name="amount"
                placeholder="Enter amount"
              />
              {amountErr !== "" ? (
                <p className="text-danger">{amountErr}</p>
              ) : (
                ""
              )}

              <PayStackHook />
            </div>
            <img src={logo} alt="" width={300} />
          </div>
        </div>
      </div>
    </>
  );
}
