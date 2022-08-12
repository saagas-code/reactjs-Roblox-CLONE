import css from './template.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/Auth/AuthContext'
import * as C from './register.styles'


export const Login = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginFAILED, setLoginFAILED] = useState(false)

    useEffect(() => {
        
    }, [])

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let json = await auth.signin(email, password)
        if(json) {
            navigate('/home')
            navigate('/home')
            console.log('Logado', json)
        } 
        if(!json) {
            setLoginFAILED(true)
        }
    }

    return (
        <div className={css.loginBody}>
            <div className={css.loginArea}>
                <div className={css.loginSpace}>
                    <div className={css.info}>Inicie a sessão no Roblox</div>
                    <div className={css.loginForm}>
                        <form action="">
                            <input onChange={e => setEmail(e.target.value)} value={email} placeholder='Usuário/e-mail/telefone' type="text" /> <br />
                            <input onChange={handlePasswordInput} value={password} placeholder='Senha' type="password" /> <br />
                            <C.Error2 popup={loginFAILED}>Email ou senha inválido.</C.Error2>
                            <button onClick={handleLogin}>Iniciar Sessão</button>
                        </form>
                    </div>
                    <div className={css.recoverer}><a>Esqueceu a senha ou nome de usuário?</a></div>
                    <div className={css.createAccount}>
                        <div className={css.linha}></div>
                        <span>Iniciar sessão com</span>
                        <div className={css.linha}></div>
                    </div>
                    <button className={css.criarConta}>Outros Dispositivos Conectados</button>
                    <span>Não possui uma conta? <Link to={'/'}>Cadastrar-se</Link></span>
                </div>
            </div>
        </div>
    )
}