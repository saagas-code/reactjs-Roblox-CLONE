import { useContext, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux/hooks/useAppSelector'
import {faPersonDress, faPerson} from'@fortawesome/free-solid-svg-icons'

import css from './template.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export const SettingsItem = () => {

    const auth = useContext(AuthContext);
    const user = auth.user
    const dispatch = useDispatch()
    const register = useAppSelector(state => state.register)
    const lenght = user?.password.length
    const str = '*'


    const[maleColor, setMaleColor] = useState('#606162')
    const[femaleColor, setFemaleColor] = useState('#606162')

    useEffect(() => {
        if(user?.gender == 'male') {
            setMaleColor('blue')
        } else {
            setFemaleColor('pink')
        }
    })

    

    const handleMaleColor = () => {
        setMaleColor('blue')
        setFemaleColor('black')
    }
    const handleFemaleColor = () => {

    }
    
    const handleSubmit = (e: { preventDefault: any }) => {
        e.preventDefault()
    }

    return (
        <div className={css.main}>
            
            <div className={css.main2}>

                
                <div className={css.Info}>Minhas Configurações</div>
                
                <div className={css.template}>
                    <div className={css.leftArea}>
                        <div>Informações</div>
                        <div>Segurança</div>
                        <div>Privacidade</div>
                        <div>Controle</div>
                        <div>Externo</div>
                        <div>Notificações</div>

                    </div>
                    <div className={css.rightArea}>
                        <div className={css.infoSection}>
                            <div><h2>Informações da conta</h2></div>
                            <div><span>Display Name: {user?.user}</span></div>
                            <div><span>Username: {user?.user}</span></div>
                            <div><span>Senha: {str.repeat(8 as number)} </span></div>
                            <div><span>Phone Number: 0000-0000</span></div>
                            <div><span>Email Addres: {user?.email}</span></div>
                        </div>
                        <div className={css.infoSection2}>
                            <div><h2>Informações Pessoal</h2></div>
                            <div className={css.aniversario}>
                                <div className={css.data}>
                                    <form onSubmit={handleSubmit} action="">
                                        <div>
                                            <span>Aniversário</span>
                                        </div>
                                        <div className={css.dataInputArea}>
                                            <select className={css.dataInput} name="" id="">
                                                <option value="">{user?.day}</option>
                                            </select>
                                            <select className={css.dataInput} name="" id="">
                                                <option value="">{user?.month}</option>
                                            </select>
                                            <select className={css.dataInput} name="" id="">
                                                <option value="">{user?.year}</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                <div className={css.data}>
                                    <form onSubmit={handleSubmit} action="">
                                        <span>Sexo</span>
                                        <div>
                                            <button type='submit'   style={{borderColor:maleColor}} className={css.maleButton}><FontAwesomeIcon className={css.FontAwesome} icon={faPerson} /></button>
                                            <button type='submit'   style={{borderColor:femaleColor}} className={css.femaleButton}><FontAwesomeIcon className={css.FontAwesome} icon={faPersonDress} /></button>
                                        </div>
                                    </form>
                                </div>
                                <div className={css.data}>
                                    <form onSubmit={handleSubmit} action="">
                                        <span>Linguagem</span>
                                        <div className={css.dataInputArea}>
                                            <select className={css.dataInput2} name="" id="">
                                                <option value="">Português</option>
                                            </select>
                                        </div>

                                    </form>
                                </div>
                                <div className={css.data}>
                                    <form onSubmit={handleSubmit} action="">
                                        <span>Tema</span>
                                        <div className={css.dataInputArea}>
                                            <select className={css.dataInput2} name="" id="">
                                                <option value="">Light</option>
                                            </select>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                    
            </div>
        </div>
    )
}