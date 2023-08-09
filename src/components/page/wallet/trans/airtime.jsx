import "../styles.css";

export default function AirtimeHistory() {
  return (
    <>
      <div className="table-responsive">
        <table className="table rounded table-sm table-borderless table-striped the_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Network</th>
              <th>Amount</th>
              <th>Number</th>
              <th>response</th>
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
              <td>
                <span className="status">Successful</span>
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
              <td>
                <span className="status">Failed</span>
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
