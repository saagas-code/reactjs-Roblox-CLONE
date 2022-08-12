import {faArrowLeft, faArrowRight} from'@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import { waitFor } from '@testing-library/react'
import { wait } from '@testing-library/user-event/dist/utils'
import { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { api, games1, games2, games3 } from '../api'
import { AuthContext } from '../contexts/Auth/AuthContext'
import { useAppSelector } from '../redux/hooks/useAppSelector'
import { setName, setImg, setLike, setPlayers, setLink } from '../redux/reducers/infoReducers'
import { Games } from '../types/User'
import { ModelItem } from './models/model'
import css from './template.module.css'



export const MainItem = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch()
    const auth = useContext(AuthContext);
    const user = auth.user
    const infos = useAppSelector(state => state.infos)

    const [games1, setGames1] = useState<Games[]>([])
    const [games2, setGames2] = useState<Games[]>([])
    const [games3, setGames3] = useState<Games[]>([])

    useEffect(() => {
        let getGames1 = async () => {
            let json = await api.RequestGames1()
            setGames1(json.users)
        }
        let getGames2 = async () => {
            let json = await api.RequestGames2()
            setGames2(json.users)
        }
        let getGames3 = async () => {
            let json = await api.RequestGames3()
            setGames3(json.users)
        }
        getGames1()
        getGames2()
        getGames3()
    }, [])
    
    


    const changeName = (newName: string) => dispatch(setName(newName))
    const changeImg = (newImg: string) => dispatch(setImg(newImg))
    const changeLike = (newLike: string) => dispatch(setLike(newLike))
    const changePlayers = (newPlayers: string) => dispatch(setPlayers(newPlayers))
    const changeLink = (newLink: string) => dispatch(setLink(newLink))


    const [slide, setSlide] = useState(0)
    const [slide2, setSlide2] = useState(0)
    const [slide3, setSlide3] = useState(0)
    
    
    const handleRight = () => {
        slide === 0 ? setSlide(-1530) : setSlide(0)
    }
    const handleRight2 = () => {
        slide2 === 0 ? setSlide2(-1530) : setSlide2(0)
    }
    const handleRight3 = () => {
        slide3 === 0 ? setSlide3(-1530) : setSlide3(0)
    }
    const handleItemClick1 = ( key: number) => {
        let tmpArray1 = [...games1]

        changeName(tmpArray1[key].name)
        localStorage.setItem('name', tmpArray1[key].name)
        changeImg(tmpArray1[key].img)
        localStorage.setItem('img', tmpArray1[key].img)
        changeLike(tmpArray1[key].like)
        localStorage.setItem('like', tmpArray1[key].like)
        changePlayers(tmpArray1[key].players)
        localStorage.setItem('players', tmpArray1[key].players)
        changeLink(tmpArray1[key].link)
        navigate(`/home/games/${tmpArray1[key].link}`)
        
    }
    const handleItemClick2 = ( key: number) => {
        let tmpArray1 = [...games2]

        changeName(tmpArray1[key].name)
        changeImg(tmpArray1[key].img)
        changeLike(tmpArray1[key].like)
        changePlayers(tmpArray1[key].players)
        changeLink(tmpArray1[key].link)
        navigate(`/home/games/${infos.link}`)
    }
    const handleItemClick3 = ( key: number) => {
        let tmpArray1 = [...games3]

        changeName(tmpArray1[key].name)
        changeImg(tmpArray1[key].img)
        changeLike(tmpArray1[key].like)
        changePlayers(tmpArray1[key].players)
        changeLink(tmpArray1[key].link)
        navigate(`/home/games/${infos.link}`)
    }

    return (
        <div className={css.main}>
            <div className={css.title} id="texto">Mais Atrativas  </div>
            <div className={css.gamesArea}>
                <div onClick={handleRight}  className={css.leftArrow}><FontAwesomeIcon icon={faArrowLeft} /></div>
                <div style={{marginLeft:slide}} className={css.slideArea}>
                    {games1?.map((item, key) => (
                        <ModelItem key={key} item={item} onClick={()=> handleItemClick1(key)}></ModelItem>
                    ))}
                </div>
                <div onClick={handleRight} className={css.rightArrow}><FontAwesomeIcon icon={faArrowRight} /></div>
            </div>

            
            <div className={css.title} id="texto">Recomendados para você</div>
                <div className={css.gamesArea}>
                    <div onClick={handleRight2} className={css.leftArrow}><FontAwesomeIcon icon={faArrowLeft} /></div>
                    <div style={{marginLeft:slide2}} className={css.slideArea2}>
                        {games2.map((item, key) => (
                            <ModelItem key={key} item={item} onClick={()=> handleItemClick2(key)} />
                        ))}
                    </div>
                    <div onClick={handleRight2} className={css.rightArrow}><FontAwesomeIcon icon={faArrowRight} /></div>
            </div>

            
                <div className={css.title} id="texto">Revelações</div>
                <div className={css.gamesArea}>
                    <div onClick={handleRight3} className={css.leftArrow}><FontAwesomeIcon icon={faArrowLeft} /></div>
                    <div style={{marginLeft:slide3}} className={css.slideArea3}>
                        {games3.map((item, key) => (
                            <ModelItem key={key} item={item} onClick={()=> handleItemClick3(key)}/>
                        ))}
                    </div>
                    <div onClick={handleRight3} className={css.rightArrow}><FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
        </div>
    )
}


/* 
<div className={css.gameSlot}>
    <div className={css.gamePhoto}> <img src="" alt="" /> </div>
    <div className={css.gameName}></div>
    <div className={css.gameInfo}>
        <span className={css.like}></span>
        <span className={css.players}></span>
    </div>
</div>

*/
