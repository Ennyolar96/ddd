import { Link } from "react-router-dom";
import airtime from "../../../assets/airtime.svg";
import dataPay from "../../../assets/data.jpg";
import dataPrinting from "../../../assets/data-printing.png";
import sms from "../../../assets/sms.png";
import cable from "../../../assets/cable.jpg";
import funacc from "../../../assets/fundacc.jpeg";
import printer from "../../../assets/printer.svg";
import referral from "../../../assets/referral.png";
import resultChecker from "../../../assets/resultchecker.png";
import utility from "../../../assets/utility.jpg";

export default function MorePage({ setMoreData }) {
  const data = [
    { id: 1, name: "Airtime", link: "/airtime", image: airtime },
    { id: 2, name: "Buy Data", link: "/buy-data", image: dataPay },
    { id: 3, name: "Bulk Sms", link: "/send_sms", image: sms },
    { id: 4, name: "Bonus to Wallet", link: "/bonus-to-wallet", image: funacc },
    { id: 5, name: "Cable Subscription", link: "/cables-sub", image: cable },
    {
      id: 6,
      name: "Electricity Bills",
      link: "/electricity-bills",
      image: utility,
    },
    {
      id: 7,
      name: "Result Checker",
      link: "/result-checker",
      image: resultChecker,
    },
    {
      id: 8,
      name: "Print Recharge Card",
      link: "/print-recharge-card",
      image: printer,
    },
    {
      id: 9,
      name: "Print Data Card",
      link: "/print-data-card",
      image: dataPrinting,
    },
    { id: 10, name: "My Referrals", link: "/referral", image: referral },
  ];

  return (
    <>
      <div className="more_container">
        <div className="more_container_sm">
          <div className="close_more">
            <button onClick={() => setMoreData(false)}>&times;</button>
          </div>
          <div className="container">
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-2">
              {data.map(({ id, name, link, image }) => (
                <div className="col" key={id}>
                  <Link to={link} className="more">
                    <div className="more_sm">
                      <img src={image} alt="logo" width={35} />
                      <h6> {name} </h6>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
MorePage.propTypes;
