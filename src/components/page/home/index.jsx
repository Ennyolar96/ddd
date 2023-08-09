import { AiFillEye } from "react-icons/ai";
import { RiAppsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import MorePage from "./more";
import { BiSolidPhoneCall, BiWifi } from "react-icons/bi";
import "./style.css";
import Header from "../../nav/header";

export default function Home() {
  const [more, setMore] = useState(false);
  const [fund, setFund] = useState(false);

  const data = [];
  const funding = [
    {
      id: 1,
      name: "ATM Funding",
      sub: "(Paystack)",
      link: "/pay-with-paystack",
    },
    { id: 2, name: "ATM Funding", sub: "(Monnify)", link: "/pay-with-monnify" },
    { id: 3, name: "Manual Bank", sub: "(Transfer)", link: "/manual-pay" },
    { id: 4, name: "Coupon Funding", sub: "(Whatsapp)", link: "/coupon-pay" },
  ];
  return (
    <>
      <Header />
      <div className="home_bottom">
        <div className="container">
          <div className="mt-3 mb-1">
            <h5>Hello! Jayeola Binbo</h5>
          </div>

          <div className="balance_container text-center py-3 rounded">
            <p>Wallet Balance</p>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <h5>NGN 860,000</h5>
              </div>
              <div>
                <h5>
                  <AiFillEye />
                </h5>
              </div>
            </div>
            <button className="btn" onClick={() => setFund(true)}>
              Fund Wallet
            </button>
          </div>

          {/* quick link */}
          <div className="mt-3 mb-1">
            <h5>Quick Action</h5>
            <div className="action">
              <div className="action_sm">
                <Link to="/airtime">
                  <div>
                    <BiSolidPhoneCall size={23} /> <br />
                    Airtime
                  </div>
                </Link>
              </div>

              <div className="action_sm">
                <Link to="/buy-data">
                  <div>
                    <BiWifi size={23} /> <br />
                    Data
                  </div>
                </Link>
              </div>

              <div className="action_sm">
                <Link onClick={() => setMore(true)}>
                  <div>
                    <RiAppsLine size={23} /> <br />
                    More
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* transactions history */}
          <div className="mt-3 mb-1">
            <div className="d-flex">
              <div>
                <h5>Transactions</h5>
              </div>
              <div className="ms-auto">
                <Link to="/">...See All</Link>
              </div>
            </div>

            <div className="trans">
              {data.length > 0 ? "see data" : "No Transaction Found!"}
            </div>
          </div>

          {/* show available funding method */}
          {fund && (
            <div className="funding">
              <div className="funding_sm">
                <div className="container">
                  <div className="row row-cols-sm-2 row-cols-2">
                    {funding.map(({ id, name, sub, link }) => (
                      <div className="col" key={id}>
                        <div className="funding_child">
                          <Link to={link}>
                            <h6>
                              {name} <br /> <span>{sub}</span>
                            </h6>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="cancel" onClick={() => setFund(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {more && <MorePage setMoreData={setMore} />}
    </>
  );
}
