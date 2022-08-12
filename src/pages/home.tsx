import { HeaderItem } from '../components/header'
import { SectionItem } from '../components/section';
import { MainItem } from '../components/main';
import css from '../components/template.module.css'
import { useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import  axios  from 'axios';

export const Home = () => {
  var auth = useContext(AuthContext);
  var userLogged = localStorage.getItem('userLOGGED')
  var token = localStorage.getItem('token')


  useEffect(() => {
    
    let request = async () => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await auth.request(userLogged as string)
    }
    
    request() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 
  

  return (
      <div className={css.fundo}>
          <HeaderItem/>
          <SectionItem/>
          <MainItem/>
      </div>
  )
}