import Confirm from "../../helper/confirm";
import { useState } from "react";
import { Product } from "../../nav/header";
import {
  AirtelData,
  EtisalatData,
  GloData,
  InitialValue,
  MtnCorporateGifting,
  MtnGifting,
  MtnSme,
} from "../../utils/network_data";
import Balance from "../../utils/balance";

export default function Data() {
  const [confirm, setConfirm] = useState(false);
  const [form, setForm] = useState({});
  const [dataType, setDataType] = useState(true);
  const [dataPlan, setDataPlan] = useState(InitialValue);

  const submitHandle = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "network") {
      console.log(e.target.name, e.target.value);
      switch (e.target.value) {
        case "1":
          setDataPlan(InitialValue);
          setDataType(true);
          break;

        case "2":
          setDataPlan(GloData);
          setDataType(false);
          break;

        case "3":
          setDataType(false);
          setDataPlan(AirtelData);
          break;
        case "4":
          setDataPlan(EtisalatData);
          setDataType(false);
          break;

        default:
          setDataType(true);
          break;
      }
    }

    if (e.target.name === "dataType") {
      switch (e.target.value) {
        case "1":
          setDataPlan(MtnSme);
          break;

        case "2":
          setDataPlan(MtnGifting);
          break;

        case "3":
          setDataPlan(MtnCorporateGifting);
          break;

        default:
          setDataType(InitialValue);
          break;
      }
    }
  };

  //send the dat to the database
  const purchase = (sendValue) => {
    console.log("inside data component", sendValue);
  };

  // const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const PathName = window.location.pathname;

  return (
    <>
      {PathName === "/buy-data" ? <Product productName="Data" /> : ""}
      <div className={PathName === "/buy-data" ? "airtime_container" : ""}>
        <div className={PathName === "/buy-data" ? "container" : ""}>
          <Balance />
          {/* <marquee direction="left">All Data&apos;s Valid For 30Days</marquee> */}

          <form onSubmit={submitHandle}>
            <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1">
              <div className="col">
                <div className="">
                  <select
                    name="network"
                    id=""
                    className="input_field"
                    onChange={changeHandler}
                  >
                    <option value="">Choose Network</option>
                    <option value="1">MTN</option>
                    <option value="2">Glo</option>
                    <option value="3">Airtel</option>
                    <option value="6">9Mobile</option>
                  </select>
                </div>
              </div>

              {dataType && (
                <div className="col">
                  <div className="">
                    <select
                      name="dataType"
                      id=""
                      className="input_field"
                      onChange={changeHandler}
                    >
                      <option value="">Data Type</option>
                      <option value="1">SME</option>
                      <option value="2">Gifting</option>
                      <option value="3">Corporate Gifting</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="col">
                <div className="">
                  <input
                    type="text"
                    name="phoneNumber"
                    id=""
                    className="input_field"
                    placeholder="Mobile Number"
                    onChange={changeHandler}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="col">
                <div className="">
                  <select
                    name="dataPlan"
                    id=""
                    className="input_field"
                    onChange={changeHandler}
                  >
                    <option value="">Plan</option>
                    {dataPlan.map(({ id, name, price }) =>
                      name !== "" ? (
                        <option value={id} key={id}>
                          {name} =&gt; &#8358;
                          {price}
                        </option>
                      ) : (
                        <option value={price} key={id}>
                          {price}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="col">
                <div className="">
                  <input
                    type="text"
                    name="amount"
                    id=""
                    className="input_field"
                    placeholder="Amount"
                    disabled
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div className="col">
                <div className="">
                  <button type="submit" className="btn_pays">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </form>
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
