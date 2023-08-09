import AirtimeHistory from "./trans/airtime";
import "./styles.css";
import DataHistory from "./trans/data";
import PaymentHistory from "./trans/payment";
import CableHistory from "./trans/cable";
import BillHistory from "./trans/bill";

export default function Activity() {
  return (
    <>
      <div className="">
        <div className="btn_container">
          <a href="#airtime">Airtime</a>
          <a href="#data">Data</a>
          <a href="#payment">Payment</a>
          <a href="#cable">Cable</a>
          <a href="#bills">Bills</a>
        </div>

        <div className="history_container">
          <div id="airtime">
            <h5>Airtime History</h5>
            <AirtimeHistory />
          </div>

          <div id="data">
            <h5>Data History</h5>
            <DataHistory />
          </div>

          <div id="payment">
            <h5>Payment History</h5>
            <PaymentHistory />
          </div>

          <div id="cable">
            <h5>Cable History</h5>
            <CableHistory />
          </div>

          <div id="bills">
            <h5>Bills History</h5>
            <BillHistory />
          </div>
        </div>
      </div>
    </>
  );
}
