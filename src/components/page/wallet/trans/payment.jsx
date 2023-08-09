import "../styles.css";

export default function PaymentHistory() {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-sm table-borderless table-striped the_table">
          <thead>
            <tr>
              <th>Reference</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>Successful</td>
            </tr>
            <tr>
              <td>123435</td>
              <td>123435</td>
              <td>123435</td>
              <td>Failed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
