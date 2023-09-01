import notFound from "../../assets/404 Error Page not Found with people connecting a plug-amico.png";

const NotFound = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 vh-100">
        <img src={notFound} alt="not showing" width={400} />
      </div>
    </>
  );
};

export default NotFound;
