import { useMemo, useState } from "react";
import "../styles.css";
import Pagination from "./pagination";

let PageSize = 5;
export default function BillHistory() {
  const output = [
    {
      id: 1,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 2,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 3,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 4,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 5,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 6,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 7,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 8,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 9,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
      date: Date.now(),
      status: "Successful",
    },
    {
      id: 10,
      name: "IBEDC",
      amount: 2000,
      number: 1234567890,
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
      <div className="">
        <div className="table-responsive">
          <table className="table table-sm table-borderless table-striped the_table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Number</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {current.map(({ id, name, amount, number, date, status }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{amount}</td>
                  <td>{number}</td>
                  <td>{date}</td>
                  <td>
                    <span className="text-success px-2 py-1 rounded">
                      {status}
                    </span>
                  </td>
                  <td>
                    <button className="view_btn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
