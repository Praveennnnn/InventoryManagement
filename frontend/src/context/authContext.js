import { Children, createContext, useState } from "react";

const authContext =createContext();

export const authProvider =({Children})=>{
    const [user,setUser]=useState(()=>{
        const storedUser =localStorage.getItem("pos-user")
        return storedUser ?JSON.parse(storedUser):null
    })

    const login=(userData,token)=>{
        setUser(userData)
        localStorage.setItem('pos-user',JSON.stringify(userData))
        localStorage.setItem('pos-token',token)
    
    }
    const logout=()=>{
        setUser(null);
        localStorage.removeItem('pos-user');
        localStorage.removeItem('pos-token')
    }

}

