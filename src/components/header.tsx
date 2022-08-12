import {faMagnifyingGlass, faGear, faReceipt, faSquareEnvelope, faCircle, faSearch} from'@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import logo from '../assets/roblox-logo.png'
import css from './template.module.css'
import {Link} from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { RequireAuth } from '../contexts/Auth/RequireAuth'
import { userInfo } from 'os'
import { AuthContext } from '../contexts/Auth/AuthContext'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/hooks/useAppSelector'
import { useSelector } from 'react-redux'
import { User } from '../types/User'
import { serialize } from 'v8'


export type Icon = {
    icon: string
}

export const HeaderItem = () => {
    const [logged, setLogged] = useState<Boolean>(false)
    const auth = useContext(AuthContext)
    const userLogged = localStorage.getItem('userLOGGED')

    const dispatch = useDispatch()
    const register = useAppSelector(state => state.register)

    const [opacity, setOpacity] = useState('0')
    const [display, setDisplay] = useState('none')

    useEffect(() => {
        
      }, [])


    const handleMenuConfig = () => {
        if (display === 'none' && opacity === '0') {
            
            setOpacity('1')
            setDisplay('block')
            
        } else {
            setOpacity('0')
            setTimeout(() => {
                setDisplay('none')
              }, 1000);
            
        }
        
    
    }

    const handleLogout = async () => {
        await auth.signout();
    }

    return (
        <div className={css.header}>
            <div className={css.headerleft}>
                <div className={css.logo}><span><img src={logo} alt="" /></span></div>

                <ul>
                    <li><Link className={css.link3} to={'/home'}>Descubra</Link></li>
                    <li>Loja do Avatar</li>
                    <li>Criar</li>
                    <li>Robux</li>
                    
                </ul>

                <span className={css.iconsearch}><FontAwesomeIcon icon={faSearch} /></span>
                
                <input type="text" className={css.search} name="pesquisar" placeholder="Pesquisar" />
            </div>
            <div className={css.headerRight}>

                {auth.user &&
                    <>
                        <div className={css.accountInfo}>
                            <span className={css.circulo}><FontAwesomeIcon icon={faCircle} /></span>
                            <a href="">@{auth.user.user}</a>
                            <span className={css.idade}>13+</span>
                        </div>
                    
                        <div className={css.notify}>
                            <span><FontAwesomeIcon icon={faSquareEnvelope} /></span>
                        </div>

                        <div className={css.robuxInfo}>
                            <span><FontAwesomeIcon icon={faReceipt} /></span>
                            <span>999</span>
                        </div>

                        <div className={css.config}>
                            <div onClick={handleMenuConfig}><FontAwesomeIcon icon={faGear} />
                                
                            </div>
                        </div>
                        <div style={{opacity:opacity, display:display}} className={css.configList}>
                            <ul>
                                <div className={css.triangulo}></div>
                                <li><Link className={css.link2} to={'/home/config'}>Configurações</Link></li>
                                <li>Ajuda</li>
                                <li><Link onClick={handleLogout} className={css.link2} to={'/'}>Deslogar</Link></li>
                            </ul>
                        </div>
                        
                    </>
                }
                {!auth.user &&
                    <>
                        <Link to='/'><button className={css.greenButton}>Cadastrar-se</button></Link>
                        <Link to='/login'><button className={css.firstButton}>Iniciar Sessão</button></Link>
                    </>
                }
                



            </div>
        </div>
    )
}