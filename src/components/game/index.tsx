import css from './template.module.css'
import { useAppSelector } from '../../redux/hooks/useAppSelector'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faRss, faStar, faThumbsUp} from'@fortawesome/free-solid-svg-icons'

export const GameItem = () => {

    const name = localStorage.getItem('name')
    const img = localStorage.getItem('img')
    const like = localStorage.getItem('like')
    const players = localStorage.getItem('players')
    const infos = useAppSelector(state => state.infos)

    const handlePlay = () => {
        alert('em construção...')
    }

    return (
        <div className={css.mainGame}>
            <div className={css.templateArea}>
                <div className={css.mainInfoGame}>
                    <div><img src={img as string} alt="" /></div>
                    <div className={css.infoGame}>
                        <div className={css.infoName}>
                            <h1>{name}</h1>
                            <h3>By: <a href="https://github.com/SaagaS0">saagas.code</a></h3>
                        </div>
                        <div className={css.playGame}>
                            <button onClick={handlePlay}><FontAwesomeIcon style={{fontSize:'40px', color:'white'}} icon={faPlay} /></button>
                            <div className={css.likes}>
                                <div className={css.statistics}>
                                    <div><FontAwesomeIcon icon={faStar} /></div>
                                    <div>Favoritar</div>
                                </div>
                                <div className={css.statistics}>
                                    <div><FontAwesomeIcon icon={faRss} /></div>
                                    <div>Seguir</div>
                                </div>
                                <div className={css.statistics}>
                                    <div><FontAwesomeIcon icon={faThumbsUp} /></div>
                                    <div>{like}K+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}