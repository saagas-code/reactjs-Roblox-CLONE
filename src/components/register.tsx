import css from './template.module.css'
import registerBg from '../assets/registerbg.png'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {setUsername, setPassword, setDay, setMonth, setYear, setEmail, setGender} from '../redux/reducers/registerReducer'
import { useDispatch } from 'react-redux'
import { api } from '../api'

import * as C from './register.styles'
import { json } from 'stream/consumers'

type Props = {
    popup?: boolean
}

export const Register = ({popup}: Props) => {
    const[data, setData] = useState(false)


    const[maleColor, setMaleColor] = useState('')
    const[femaleColor, setFemaleColor] = useState('')

    const[username, setUsernameInput] = useState('')
    const[usernameERROR, setUsernameERROR] = useState(data)

    const[password, setPasswordInput] = useState('')
    const[passwordERROR, setPasswordERROR] = useState(data)

    const[email, setEmailInput] = useState('')
    const[emailERROR, setEmailERROR] = useState(data)

    const[day, setDayInput] = useState<number>(0)
    const[dayERROR, setDayERROR] = useState(false)

    const[month, setMonthInput] = useState('')
    const[monthERROR, setMonthERROR] = useState(false)

    const[year, setYearInput] = useState<number>(0)
    const[yearERROR, setYearERROR] = useState(false)

    const[gender, setGenderInput] = useState('')
    const[genderERROR, setGenderERROR] = useState(false)

    useEffect(() => {
        localStorage.clear()
    }, [])

    
    // mudar o state payload
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleMaleColor = () => {
        setMaleColor('blue')
        setFemaleColor('')
        setGenderInput('male')
        setGenderERROR(false)
        
    }
    const handleFemaleColor = () => {
        setFemaleColor('pink')
        setMaleColor('')
        setGenderInput('female')
        setGenderERROR(false)
    }

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value)
        setEmailERROR(false)
    }
    const handleUsernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameInput(e.target.value)
        setUsernameERROR(false)
    }
    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInput(e.target.value)
        setPasswordERROR(false)
    }
    const handleDayInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDayInput(e.target.value as unknown as number)
        setDayERROR(false)
    }
    const handleMonthInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonthInput(e.target.value)
        setMonthERROR(false)
    }
    const handleYearInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYearInput(e.target.value as unknown as number)
        setYearERROR(false)
    }
    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (day == 0) {
            setDayERROR(true)
        }
        if (month == '') {
            setMonthERROR(true)
        }
        if (year == 0) {
            setYearERROR(true)
        }
        if (username == '') {
            setUsernameERROR(true)
        }
        if (email == '') {
            setEmailERROR(true)
        }
        if (password == '') {
            setPasswordERROR(true)
        }
        if (gender == '') {
            setGenderERROR(true)
        }
        
        else {
            setDayERROR(false)
            setMonthERROR(false)
            setYearERROR(false)
            setUsernameERROR(false)
            setPasswordERROR(false)
            setEmailERROR(false)
            setGenderERROR(false)

            let json = await api.Register(email, username, password, day, month, year, gender)

            if(json.emailERROR) {
                setEmailERROR(true)
            } else {
                alert('Conta criada com sucesso.')
                navigate('/login')
                console.log(json)
                
            }
            
        }
    }
   
    
   

    return( 
        <div style={{backgroundImage: `url(${registerBg})`}} className={css.cadastroBody}>
            <div className={css.login}>
                <div className={css.loginText}><Link to={'/login'} style={{textDecoration:'none', color: 'black'}}>Iniciar Sessão </Link></div>
            </div>
            <div className={css.roblox}>Roblox</div>
            <div className={css.registro}>
                <div className={css.registroInfo}>
                    <span>CADASTRE-SE E COMECE A SE <br /> DIVERTIR!   </span>
                    
                    <form action="">
                        Data de Nascimento <br />
                        <C.Select onChange={handleDayInput} className={css.First} name="Dia" popup={dayERROR}>
                            <option value="Dia">Dia</option>
                            <option value='1'>1</option>
                            <option value="3">3</option>
                            <option value="4">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>

                            
                            
                        </C.Select>
                        <C.Select onChange={handleMonthInput} name="Mês" popup={monthERROR}>
                            <option value="Mês">Mês</option>
                            <option value="Janeiro">Janeiro</option>
                            <option value="Fevereiro">Fevereiro</option>
                            <option value="Março">Março</option>
                            <option value="Abril">Abril</option>
                            <option value="Maio">Junho</option>
                            <option value="Julho">Julho</option>
                            <option value="Agosto">Agosto</option>
                            <option value="Setembro">Setembro</option>
                            <option value="Outubro">Outubro</option>
                            <option value="Novembro">Novembro</option>
                            <option value="Dezembro">Dezembro</option>
                        </C.Select>
                        <C.Select onChange={handleYearInput} name="Ano" popup={yearERROR}>
                            <option value="Ano">Ano</option>
                            <option value="1990">1990</option>
                            <option value="1995">1995</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2005">2005</option>
                            <option value="2010">2010</option>
                        </C.Select>
                        <C.Error popup={yearERROR}>Data de Nascimento inválida.</C.Error>
                        
                    </form>
                    
                    <div className={css.input0}>
                        <span>Email</span><br />
                        <C.Input popup={emailERROR} onChange={handleEmailInput} placeholder='Digite seu email'></C.Input>
                        <C.Error popup={emailERROR}>Este email já está sendo usado.</C.Error>
                    </div>

                    <div className={css.input0}>
                        <span>Usuário</span> <br />
                        <C.Input popup={usernameERROR} onChange={handleUsernameInput} placeholder='Não use o seu nome real' type="text" ></C.Input>
                        <C.Error popup={usernameERROR}>Este email já está sendo usado.</C.Error>
                    </div>

                    <div className={css.input0}>
                        <span>Senha</span> <br />
                        <C.Input popup={passwordERROR} onChange={handlePasswordInput} placeholder='Minimo de 8 caracteres' type="password" ></C.Input>
                        <C.Error popup={passwordERROR}>Senha inválida.</C.Error>
                    </div>

                    

                    <div className={css.gender}>
                        <div>
                            <C.Button popup={genderERROR} style={{borderColor:maleColor}} onClick={handleMaleColor}>Male</C.Button>
                            <C.Button popup={genderERROR} style={{borderColor:femaleColor}} onClick={handleFemaleColor}>Female</C.Button>
                            
                        </div>
                        
                    </div>
                    

                    <div className={css.termos}>
                    Ao clicar em Cadastrar-se, você aceita os <a>Termos de Uso</a> (incluindo a cláusula de arbitragem) e a <a>Política de Privacidade</a>.
                    </div>

                    <button onClick={handleRegister} className={css.cadastrar}>Cadastrar-se</button>
                
                </div>
            </div>
        </div>
    )
}
