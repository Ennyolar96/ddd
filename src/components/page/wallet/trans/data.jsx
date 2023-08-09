import "../styles.css";

export default function DataHistory() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-sm table-borderless table-striped the_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Network</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Number</th>
              <th>Response</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>
                <span className="bg-success text-light px-2 py-1 rounded">
                  Successful
                </span>
              </td>
              <td>
                <button className="view_btn">View</button>
              </td>
            </tr>
            <tr>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>
                <span className="bg-danger text-light px-2 py-1 rounded">
                  Failed
                </span>
              </td>
              <td>
                <button className="view_btn">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
