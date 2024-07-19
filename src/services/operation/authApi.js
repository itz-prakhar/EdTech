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
        //    console.log("responseUser",user," ");

           dispatch(setToken(token));
           dispatch(setUser(response.user))

           toast.dismiss(toastId);
           localStorage.setItem('token',token)
           localStorage.setItem('user',JSON.stringify(response.user))
           const tokenUser=localStorage.getItem("user")
        //    console.log("tokenUsertokenUser",tokenUser)
           console.log("tokenUser",JSON.parse(tokenUser).firstName)
           dispatch(setLoading(false));
           navigate("/dashboard")
        }
        catch(err){
            console.log("Error in login ",err)
            dispatch(setLoading(false));
            toast.error("Invalid Credentials")
        }
        finally{
            dispatch(setLoading(false))
            toast.dismiss(toastId);
        }
    }
}
export function SendOTP(email,navigate){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        const toastId=toast.loading("loading")
        try{
            const response = await fetchData("POST" , authenticate.SEND_OTP,{email})
            if(!response.success){
                toast.error("Account already Registered,Please LogIn")
            }
            console.log("response OTP",response)
            toast.success("Send otp Succesfully");
            navigate("/otp")
        }
        catch(err){
            console.log("Error in OTP validation",err)
            toast.error("Account already exist,Please LogIn")
            toast.dismiss(toastId)
        }
        finally{
            dispatch(setLoading(false))
            toast.dismiss(toastId)
        }
        
    }
}
export function Signup(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate){
    return async(dispatch)=>{
        dispatch(setLoading(true))
        const toastId=toast.loading("Loading");
        try{
            const response = await fetchData("POST",authenticate.SIGNUP_API,{accountType,firstName,lastName,email,password,confirmPassword,otp})
            if(!response.success){
                toast.err("Error in SignUp")
            }
            console.log("response Signup",response)
            //token empty  user empty  navigate to login //localstore Empty
            dispatch(setToken(null))
            dispatch(setUser(0))
            localStorage.clear()
            toast.success("Signup Successfully ,Please login..")
            navigate("/login")

        }
        catch(err){
            console.log("Wrong OTP ")
            toast.error("Error in SignUp")
        }
        finally{
            dispatch(setLoading(false))
            toast.dismiss(toastId)
        }
    }
}