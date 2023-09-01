import profile from "../../assets/OIP.jpeg";
import Settings from "../page/settings";
import style from "./nav.module.css";
import { MdNotificationsNone } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [setting, setSettings] = useState(false);
  return (
    <>
      <div className={style.header_container}>
        <div className="d-flex">
          <div className={style.image_container}>
            <img
              src={profile}
              alt="Profile"
              onClick={() => setSettings(true)}
            />
          </div>
          <div className="ms-auto me-3">
            <div className={style.nav_second}>
              <a href="">
                <MdNotificationsNone size={23} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {setting && <Settings setSettings={setSettings} />}
    </>
  );
}

export const Profile = ({ setSettings }) => {
  return (
    <>
      <div className={style.header_container}>
        <div className="d-flex">
          <div className={style.image_container}>
            <a onClick={() => setSettings(false)}>
              <FaAngleLeft />
              Profile
            </a>
          </div>
          <div className="ms-auto me-3">
            <div className={style.nav_second}>
              <a href="">
                <MdNotificationsNone size={23} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Product = ({ productName }) => {
  return (
    <>
      <div className={style.header_container}>
        <div className="d-flex">
          <div className={style.image_container}>
            <Link to="/dashboard">
              <FaAngleLeft />
              {productName}
            </Link>
          </div>
          <div className="ms-auto me-3">
            <div className={style.image_container}>
              <img src={profile} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.propTypes;
Product.propTypes;
