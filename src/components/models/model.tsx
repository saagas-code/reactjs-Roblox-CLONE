import {faThumbsUp, faGlobe} from'@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {PropGames} from '../../api'
import css from '../template.module.css'

type Props = {
    item: PropGames,
    onClick: () => void
    
}

export const ModelItem = ({item, onClick}: Props) => {

    return (
        <div onClick={onClick} className={css.gameSlot}>
            <div className={css.gamePhoto}> {item.img !== null && <img src={item.img} alt="" />} </div>
            <div className={css.gameName}>{item.name}</div>
            <div className={css.gameInfo}>
                <span className={css.like}><FontAwesomeIcon icon={faThumbsUp} /><div>{item.like}</div></span>
                <span className={css.players}><FontAwesomeIcon icon={faGlobe} /><div>{item.players}</div></span>
            </div>
        </div>
    )
}