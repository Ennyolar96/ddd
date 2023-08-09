import { BsSearch } from "react-icons/bs";
import { Product } from "../../nav/header";
import "./styles.css";
import { FaCopy } from "react-icons/fa";
import Notify from "../../helper/notify";
import { useState } from "react";

export default function Referral() {
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setMessage("Your refer code was copied successfully");
      setAlert(true);
    } catch (err) {
      setMessage("Unable to copy! Try again later");
    }
  };

  return (
    <>
      <div className="profile_container">
        <Product productName="Referrals" />
        <div className="container">
          <div className="search">
            <h5 className="text-center">Invite your friends</h5>
            {alert && <Notify close={setAlert} message={message} />}
            <p>
              When a referral is successful. You&apos;ll get NGN500 into your
              CompanyName Account.
            </p>
            <div className="search_container">
              <BsSearch className="search_icon" size={25} />
              <input type="search" name="" id="" placeholder="Search" />
            </div>

            <div className="refer_code">
              <div className="d-flex mt-3">
                <div className="d-flex justify-contest-center align-items-center">
                  <h5>Referral Code: 23A3ER4</h5>
                </div>

                <div className="ms-auto">
                  <button
                    className="copy"
                    onClick={() => copyToClipBoard("23A3ER4")}
                  >
                    <FaCopy size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="refer_list">
            <div className="mt-3">
              <div className="d-flex">
                <div>
                  <h6>Alexis Reynods</h6>
                  (123) 123-123
                </div>

                <div className="ms-auto d-flex justify-contest-center align-items-center">
                  <h6 className="success">Successful</h6>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="d-flex">
                <div>
                  <h6>Alexis Reynods</h6>
                  (123) 123-123
                </div>

                <div className="ms-auto d-flex justify-contest-center align-items-center">
                  <h6 className="pending">Pending</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
