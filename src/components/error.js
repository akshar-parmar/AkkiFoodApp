
import {Link, useRouteError} from "react-router-dom";
import errorImg from "../../images/404 Error.jpg";
export const Error = () => {
    const {status,statusText,data} = useRouteError();
    // const errobj = useRouteError();
    // console.log(errobj.data);
  return (
    <div className="err-container">
        <div className="err-img-div">
          <img className="err-img" src={errorImg}></img>
        </div>
        <div className="err-message-div">
        <h1>Oopsss...!</h1>
        <h1>{status + " " + statusText}</h1>
        <h3>{data}</h3>
        <h3 className="back-home">
          <Link to = "/">Back Home</Link>
        </h3>
        </div>

    </div>
  )
}
