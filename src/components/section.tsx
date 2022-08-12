import {faCircle, faHouse, faUser, faMessage, faUserGroup, faUserAstronaut, faWarehouse, faMoneyBillTrendUp, faPeopleGroup, faSquareRss, faCartShopping, faAppleAlt} from'@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'

import { useAppSelector } from '../redux/hooks/useAppSelector'
import {Link} from 'react-router-dom'
import css from './template.module.css'
import { AuthContext } from '../contexts/Auth/AuthContext'
import { useContext } from 'react'

export const SectionItem = () => {
    const auth = useContext(AuthContext);

    
    const register = useAppSelector(state => state.register)
    

    return (
        <div className={css.section}>
            <div className={css.accountInfoLeft}>
            <span><FontAwesomeIcon icon={faCircle} /></span>
            <span>{auth.user?.user}</span>
        </div>
        <div className={css.listLeft}>
            <ul>
                <Link style={{textDecoration:'none', color:'inherit'}} to={'/home'}>
                    <li style={{cursor:'pointer'}}>
                        <span><FontAwesomeIcon icon={faHouse} /></span>
                        <span>Inicio</span>
                    </li>
                </Link>
                    <li>
                    <span><FontAwesomeIcon icon={faUser} /></span>
                    <span>Perfil</span>
                    </li>
                
                <li>
                    <span><FontAwesomeIcon icon={faMessage} /></span>
                    <span>Mensagens</span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faUserGroup} /></span>
                    <span>Amigos</span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faUserAstronaut} /></span>
                    <span>Avatar</span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faWarehouse} /></span>
                    <span>Inventário</span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faMoneyBillTrendUp} /></span>
                    <span>Trocar</span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faPeopleGroup} /></span>
                    <span>Grupos</span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faSquareRss} /></span>
                    <span>Blogs</span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faCartShopping} /></span>
                    <span>Loja Oficial</span>
                </li>
                <li>
                    <span><FontAwesomeIcon icon={faAppleAlt} /></span>
                    <span>Cartões presentes</span>
                </li>
            </ul>       
        </div>
        <div className={css.buttom}>
            Assine Premium
        </div>
        <div className={css.events}>Eventos</div>
        </div>
    )
}