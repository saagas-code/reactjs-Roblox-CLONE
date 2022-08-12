import { HeaderItem } from '../components/header'
import { SectionItem } from '../components/section';
import {GameItem} from '../components/game'
import { useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import  axios  from 'axios';
import css from '../components/template.module.css'


export const Game = () => {
    const auth = useContext(AuthContext);
    const userLogged = localStorage.getItem('userLOGGED')
    const token = localStorage.getItem('token')

    useEffect(() => {
        let request = async () => {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          await auth.request(userLogged as string) 
        } 
        
        request() // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return (
        <div className={css.fundo5}>
            <HeaderItem/>
            <SectionItem/>
            <GameItem/>
        </div>
    )
}