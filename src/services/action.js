import { GETUSERVALUE,GETPASSWORDVALUE,USERNAME,PASSWORD, CONFIRMPASSWORD } from "./actionType";

export const UserNameValue = (userValue) => {
    return {type:GETUSERVALUE,payload:userValue}
}
export const PasswordValue = (password) => {
    return {type:GETPASSWORDVALUE,payload:password}
}
export const UserName = (user) => {
    return{type:USERNAME,payload:user}
}
export const Password = (password) => {
    return{type:PASSWORD,payload:password}
}
export const ConfirmPassword = (ConfirmPassword) => {
    return{type:CONFIRMPASSWORD,payload:ConfirmPassword}
}