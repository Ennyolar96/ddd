import "../styles.css";

export default function CableHistory() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-sm table-borderless table-striped the_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>IUC</th>
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
              <td>Successful</td>
              <td>View</td>
            </tr>
            <tr>
              <td>123435</td>
              <td>GOTV jinja</td>
              <td>123435</td>
              <td>1234567890</td>
              <td>Feb 20</td>
              <td>Failed</td>
              <td>View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
