import * as actionTypes from "./actionTypes";
import axios from "axios";

export const auth = (email,password)=> dispatch=>{
    const authData = {
        email:email,
        password:password,
        returnSecureToken:true,
    }
    const API_KEY = "AIzaSyA7-MKN9GCwwwjCwFFLcVjaO-q27mRiGkg" ;
    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,authData)
    .then(res =>console.log(res))
    .catch((err)=>console.log(err));
}