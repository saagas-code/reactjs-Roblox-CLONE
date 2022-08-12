import { Logar } from "../../pages/logar";
import { useContext } from 'react';
import { AuthContext } from "./AuthContext";
import { useNavigate } from 'react-router-dom'
import { Register } from './../../components/register';
import { NotFound } from "../../pages/notfound";


export const RequireAuth = ({children}: {children: JSX.Element}) => {
    const token = localStorage.getItem('token')
    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    if(!token) {
        
        return <NotFound />
    }


    return children
}