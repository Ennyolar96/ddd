import "./bal.css";

export default function Balance() {
  return (
    <>
      <div className="container mb-4 mt-5">
        <div className="d-flex">
          <div className="circle">
            &#8358;
            <div className="circle_sm">
              <div className="circle_sm_sm">
                <div className="circle-last"></div>
              </div>
            </div>
          </div>
          <div className="ms-auto balance me-3">
            <p>Available Balance</p>
            <h5>&#8358;20,000.00</h5>
          </div>
        </div>
      </div>
    </>
  );
}
