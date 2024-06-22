import {toast} from "react-hot-toast";
import { setLoading ,setToken} from "../../Redux/Slice/authSlice";
import {setUser} from "../../Redux/Slice/userSlice"
import fetchData from "../apiConnector"
import {authenticate} from "../APIs"
import Cookies from "js-cookie";

export function Login(email,password,navigate){
    
    return async(dispatch)=>{
        const toastId=toast.loading("loading")
        dispatch(setLoading(true));
        try{
           const response = await fetchData("POST",authenticate.LOGIN_API,{email,password});
           if(!response.ok){
            toast.dismiss(toastId);
            dispatch(setLoading(false));
           }
           const token=response.token;
           toast.success("LoggedIn Successful")
           const user=JSON.stringify(response.user)
           console.log("responseUser",user," ");

           dispatch(setToken(token));
           dispatch(setUser(response.user))

           toast.dismiss(toastId);
           localStorage.setItem('token',token)
           localStorage.setItem('user',JSON.stringify(response.user))
           const tokenUser=localStorage.getItem("user")
           console.log("tokenUser",JSON.parse(tokenUser).firstName)
           navigate("/dashboard")
        }
        catch(err){
            console.log("Error in login ",err)
        }
    }
}