import {toast} from "react-hot-toast"
import axios from "axios"
import { updateProfile } from "../APIs"
import { setUser,setLoading } from "../../Redux/Slice/userSlice"
import fetchData from "../apiConnector"
import { setToken } from "../../Redux/Slice/authSlice"
export function updatePicture (formData,token){
    return async (dispatch)=>{

        let toastId

        try{
          dispatch(setLoading(true))
          toastId = toast.loading("Uploading")
          console.log("formData", Array.from(formData.entries()));
         const response = await axios.put(updateProfile.updateProfilePicture,formData, { headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization':`Bearer ${token}`
          
        }})
    
        toast.success("Uploaded Successfully")
        dispatch(setUser(response.data.uploadImage))
        localStorage.setItem("user",JSON.stringify(response.data.uploadImage))
        }
        catch(e){
          toast.error("Error in uploading")
          console.log("error while uplaoding image",e)
        }
        finally{
          toast.dismiss(toastId)
          dispatch(setLoading(false))
        }
    }
}
export function updateProfileDetails (data,token,navigate){
  return async(dispatch)=>{
    let toastId
    try{
      toastId=toast.loading("Updating Profile Details")
      const response= await fetchData("PUT",updateProfile.updateProfile,data,token)
      dispatch(setUser(response.UserDetails))
      localStorage.setItem("user",JSON.stringify(response.UserDetails))
      toast.success("Successfully Profile Updated")
      toast.dismiss(toastId)
      navigate("/dashboard/my-profile")
    }
    catch(err){
      toast.error("Error while Updating Profile Details")
      console.log("Error while Updating Profile")
    }
    finally{
      toast.dismiss(toastId)
    }
  }
}
export function UpdatePasswordDetails (oldPassword,newPassword,email,token){
  
  return async (dispatch)=>{
    let toastId
    try{
      toastId=toast.loading("Updating Password")
      const response = await fetchData("POST",updateProfile.UpdatePassword_API,{oldPassword,newPassword,confirmPassword:newPassword,email},token)
      console.log("I am in SettingPassword",response.newUser)
      dispatch(setUser(response.newUser))
      localStorage.setItem("user",JSON.stringify(response.newUser))
      toast.success("Password Updated Successfully")
    }
    catch(err){
      toast.error("Unable to Update Password")
    }
    finally{
      toast.dismiss(toastId)
    }
  }
}
export function DeleteUserProfile (token,navigate){
 return async (dispatch)=>{
  let toastId
  try{
    toast.loading("Deleting user account")
    const response=await fetchData("DELETE",updateProfile.deleteProfile_API,{},token)
    console.log("Resposne in delete account",response)
    toast.success("Profile Deleted Successfully")
    toast.dismiss(toastId)
    dispatch(setUser(0))
    dispatch(setToken(null))
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    navigate("/")
  }
  catch(err){
    toast.error("Error in Deleting Profile")
  }
  finally{
    toast.dismiss(toastId)
  }
 }
}