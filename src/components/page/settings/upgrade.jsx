import { Product } from "../../nav/header";

export default function Upgrade() {
  return (
    <>
      <div className="profile_container">
        <Product productName="Upgrade" />
        <div className="container">
          <div>image</div>

          <div className="why_become">
            <h5>Why become an Agent?</h5>
            <p>
              The well-considered idea of having a source of income from the
              comfort of your home comes in useful in a world devastated by a
              pandemic with its concomitant job losses and hyperinflation.
              CompanyName has some appealing, mouth-watering offers specifically
              for you to help you fulfill your interest. Come join our throng of
              agents and watch your entrepreneurial ambitions materialize.
              companyName provides her agents with the most affordable airtime
              and data topup plans across all networks. Reselling data and
              airtime will allow you, as an agent, to earn more money.
            </p>
          </div>
          <div className="why_become">
            <h5>Special Benefit</h5>
            <ul>
              <li>
                Enjoy discount on every data topup check Prices on the dashboard
                to compare products prices.
              </li>
              <li>Zero charge on all bill payment.</li>
              <li>Unfettered 24/7 access to our support team.</li>
              <li>
                Referral Commission that will be credited to your wallet
                automatically on every person that uses your referral code
                during their registration and equally upgrade their accounts to
                agent too.
              </li>
              <li>Special recognition and prompt resolution of issue. </li>
              <li> Periodic reward for outstanding performance.</li>
            </ul>
          </div>

          <p>
            <b>
              Wouldn&apos;t you rather upgrade your account to an agent NOW?
            </b>
          </p>

          <div className="upgrade_btn">
            <div className="d-flex">
              <button>Upgrade to Affiliate</button>
              <button className="ms-auto">Upgrade to Topuser</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
