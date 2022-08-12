import { useContext } from "react";
import { HeaderItem } from "../components/header"
import {Login} from '../components/login'
import css from '../components/template.module.css'
import { AuthContext } from "../contexts/Auth/AuthContext";
import { MainItem } from './../components/main';



export const Logar = () => {
    const auth = useContext(AuthContext);
    let user = auth.user
    
    if(user) {
        return (
            <div className={css.logarBody}>
                <HeaderItem/>
                <Login/>
                <MainItem/>
            </div>
        )
    } else {
        return (
            <div className={css.logarBody}>
                <HeaderItem/>
                <Login/>
            </div>
        )
    }
}