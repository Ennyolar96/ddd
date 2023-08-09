import { AiFillHome } from "react-icons/ai";
import { BiWallet, BiTransferAlt } from "react-icons/bi";
import style from "./nav.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="">
        <div className={style.nav_container}>
          <div className={style.nav_con}>
            <Link to="/dashboard">
              <AiFillHome size={20} /> <br /> <span>Home</span>
            </Link>
          </div>

          <div className={style.nav_con}>
            <Link to="/payment">
              <BiTransferAlt size={20} /> <br /> <span>Payment</span>
            </Link>
          </div>

          <div className={style.nav_con}>
            <Link to="/wallet">
              <BiWallet size={20} /> <br /> <span>Wallet</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
