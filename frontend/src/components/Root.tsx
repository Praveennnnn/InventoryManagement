import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';


const Root = ()=>{
    const User =useAuth();
    const navigate=useNavigate()

    useEffect(()=>{

        if(User){
            if(User.role==="admin"){
                navigate("/admin/dashboard")
            }
            else if(user.role==="customer"){
                navigate("/employee/dashboard")
            }
            else{
                navigate("/login")
            }
        }
        else{
            navigate("/login")
        }
    },[user,navigate])

    return null;
}
export default Root