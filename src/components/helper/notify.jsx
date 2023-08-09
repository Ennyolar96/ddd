export default function Notify({ close, message }) {
  return (
    <>
      <div className="notify_container">
        <div className="notify_sm">
          <h5>Dear esteemed customer</h5>
          <p>{message}</p>

          <button onClick={() => close(false)}>OKAY</button>
        </div>
      </div>
    </>
  );
}

Notify.propTypes;
