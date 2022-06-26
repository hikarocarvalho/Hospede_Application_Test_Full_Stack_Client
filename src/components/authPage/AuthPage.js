import Auth from "../../api/entities/Auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AuthPage(props){
    const [auth, setAuth] = useState({
        auth: false
    })
    const navigate = useNavigate();
    useEffect(()=>{
        Auth.authenticate().then(response=>{
            if(response.status===200){
                setAuth({
                    ...auth,
                    auth:true
                })
            }
        }).catch(error=>{navigate("/login");})
    },[localStorage.getItem('auth')]);

    return (<>{auth.auth?props.children:<></>}</>);

}