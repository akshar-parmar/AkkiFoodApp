
import {useRouteError} from "react-router-dom"
export const Error = () => {
    const {status,statusText} = useRouteError();
    
  return (
    <div>
        <h1>Oopsss...!</h1>
        <h1>Something went Wrong!</h1>
        <h1>{status + " " + statusText}</h1>
    </div>
  )
}
