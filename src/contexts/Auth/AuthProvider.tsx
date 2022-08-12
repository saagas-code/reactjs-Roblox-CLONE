
import axios from 'axios'
import { useEffect, useState } from 'react'
import { User } from '../../types/User'
import {AuthContext} from './AuthContext'
import { api } from './../../api';


export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null)
    const token = localStorage.getItem('token')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          }
    }, [token])

    const setToken = (token: string) => {
        localStorage.setItem('token', token)
    }

    const signin = async (email: string, password: string) => {
        const data = await api.Login(email, password);
        

        if(data.status === true) {
            setUser(data.user)
            localStorage.setItem('userLOGGED', data.user.email)
            setToken(data.token)
        
            return true
        } 
        return false

        
    } 

    const signout = async () => {
        await api.Logout()
        setUser(null)
        localStorage.clear()
    }

    const request = async (email: string) => {
        let data = await api.Request(email)
        
        if(data) {
            setUser(data.user)
            return true
        }
        return false

    }

    

    return (
        <AuthContext.Provider value={{user, signin, signout, request}}>
            {children}
        </AuthContext.Provider>
    )
}