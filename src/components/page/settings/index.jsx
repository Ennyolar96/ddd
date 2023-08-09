import { Profile } from "../../nav/header";
import "./styles.css";
import profile from "../../../assets/OIP.jpeg";
import { BsFillCameraFill } from "react-icons/bs";
import { BiSolidUser, BiLogOut } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Settings({ setSettings }) {
  const data = [
    {
      id: 1,
      name: "Personal Info",
      link: "/personal-info",
      icon: <BiSolidUser />,
    },
    {
      id: 2,
      name: "Login & Security",
      link: "/security",
      icon: <MdSecurity />,
    },
    { id: 3, name: "Price", link: "/prices", icon: <GiUpgrade /> },
    { id: 4, name: "Upgrade", link: "/upgrade", icon: <GiUpgrade /> },
    { id: 5, name: "Logout", icon: <BiLogOut /> },
  ];

  return (
    <>
      <div className="settings_container">
        <Profile setSettings={setSettings} />
        <div className="container">
          <div className="container_profile">
            <div className="profile_image">
              <img src={profile} alt="Profile" />
              <div className="profile_image_sm">
                <input type="file" name="" id="profile_picture" hidden />
                <label
                  htmlFor="profile_picture"
                  className="d-flex justify-content-center mt-1 text-light"
                >
                  <BsFillCameraFill size={15} />
                </label>
              </div>
            </div>
            <h5>Olaniyan Mutiu</h5>
          </div>

          <div className="details_container">
            <div className="row row-cols-sm-1 row-cols-1">
              {data.map(({ id, name, icon, link }) => (
                <div className="col" key={id}>
                  <div className="">
                    <Link to={link}>
                      {icon} {name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Settings.propTypes;
