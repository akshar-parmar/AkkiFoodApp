import { createContext } from "react";
const UserContext = createContext({
    user :{
        name : "dummy-name",
        email : "abc@gmail.com"
    }
});
export default UserContext;
