import {useState,useEffect} from "react";

const useOnlineStatus = ()=>{
    const [isOnline, setIsOnline] = useState(true);


    const handleOffline = ()=>{
        
        setIsOnline(false);
    }
    const handleOnline = ()=>{
        //console.log("online function");
        setIsOnline(true);
    }

    useEffect(()=>{
        //console.log("inside useEfffect hook");
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);
        return ()=>{
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }
    },[]);

    return isOnline; //return true or false

}
export default useOnlineStatus;