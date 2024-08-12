import UpdatePassword from "../Components/Dashboard/Setting/UpdatePassword";

const BASEURL = import.meta.env.VITE_BASE_URL;

export const categories = {
  CATEGORIES_API: BASEURL + "/course/showAllCategory",
};
export const authenticate={
  LOGIN_API:BASEURL+"/auth/login",
  SEND_OTP:BASEURL+"/auth/sendOTP",
  SIGNUP_API:BASEURL+"/auth/signup"
}

export const contactUsForm={
  SendMail_API:BASEURL+"/auth/contactUs"
}
export const updateProfile={
  updateProfilePicture:BASEURL+"/profile/updateProfilePicture",
  updateProfile:BASEURL+"/profile/updateProfile",
  UpdatePassword_API:BASEURL+"/auth/forgetPassword",
  deleteProfile_API:BASEURL+"/profile/deleteAccount"
}