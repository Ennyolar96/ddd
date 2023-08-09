import { useMemo, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pagination from "./trans/pagination";

let PageSize = 5;
export default function Wallet() {
  const [fund, setFund] = useState(false);

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

  const output = [
    {
      id: 1,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 2,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },

    {
      id: 3,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },

    {
      id: 4,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },

    {
      id: 5,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },

    {
      id: 6,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },

    {
      id: 7,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },

    {
      id: 8,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },

    {
      id: 9,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },

    {
      id: 10,
      bal_before: 1000,
      amount: 2000,
      bal_after: 3000,
      method: "Manual",
      date: Date.now(),
      status: "Successful",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  // const [output, setOuput] = useState([]);

  const current = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return output.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, output]);

  return (
    <>
      <div className="wallet_bottom">
        <div className="balance_container text-center py-3 rounded">
          <p>Wallet Balance</p>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <h5>NGN 860,000</h5>
            </div>
            <div className="ms-1">
              <h5>
                <AiFillEye />
              </h5>
            </div>
          </div>
          <button className="btn" onClick={() => setFund(true)}>
            Fund Wallet
          </button>
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

        {/* Balance History */}
        <div className="mt-4 ">
          <div className="table-responsive">
            <table className="table table-sm table-borderless table-striped the_table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Before</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>After</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {current.map(
                  ({
                    id,
                    amount,
                    method,
                    bal_after,
                    bal_before,
                    date,
                    status,
                  }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>&#8358;{bal_before}</td>
                      <td>&#8358;{amount}</td>
                      <td>{method}</td>
                      <td>&#8358;{bal_after}</td>
                      <td>{date}</td>
                      <td>
                        <span className="text-success px-2 py-1 rounded">
                          {status}
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          className="pagination-bar my-4"
          currentPage={currentPage}
          totalCount={output.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}
