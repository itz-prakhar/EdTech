import {toast} from "react-hot-toast"
import axios from "axios"
import { updateProfile } from "../APIs"
import { setUser,setLoading } from "../../Redux/Slice/userSlice"
import fetchData from "../apiConnector"
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