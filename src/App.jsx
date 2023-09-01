import { Route, Routes } from "react-router-dom";
import Footer from "./components/nav/footer";
import Home from "./components/page/home";
import Payment from "./components/page/payment";
import Wallet from "./components/page/wallet";
import ManualPay from "./components/page/wallet/fund/manual-pay";
import Monnify from "./components/page/wallet/fund/monnify";
import PayStack from "./components/page/wallet/fund/pay-stack";
import Coupon from "./components/page/wallet/fund/coupon";
import Info from "./components/page/settings/info";
import Security from "./components/page/settings/security";
import Upgrade from "./components/page/settings/upgrade";
import Airtime from "./components/page/payment/airtime";
import Data from "./components/page/payment/data";
import Cable from "./components/page/payment/cable";
import Bills from "./components/page/payment/bills";
import Referral from "./components/page/other/referral";
import Login from "./components/page/auth/login.jsx";
import Register from "./components/page/auth/register";
import FlashScreen from "./components/nav/flashScreen";
import NotFound from "./components/page/NotFound";

function App() {
  const loc = window.location.pathname;

  return (
    <>
      <Routes>
        <Route path="/" element={<FlashScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/pay-with-paystack" element={<PayStack />} />
        <Route path="/pay-with-monnify" element={<Monnify />} />
        <Route path="/manual-pay" element={<ManualPay />} />
        <Route path="/coupon-pay" element={<Coupon />} />
        <Route path="/personal-info" element={<Info />} />
        <Route path="/security" element={<Security />} />
        <Route path="/upgrade" element={<Upgrade />} />
        {/* product links */}
        <Route path="/airtime" element={<Airtime />} />
        <Route path="/buy-data" element={<Data />} />
        <Route path="/cables-sub" element={<Cable />} />
        <Route path="/electricity-bills" element={<Bills />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {loc === "/" || loc === "/login" || loc === "/register" ? "" : <Footer />}
    </>
  );
}

export default App;
