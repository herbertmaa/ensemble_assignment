import ChampionImage from "../ChampionImage/ChampionImage"
import ChampionDescription from "../ChampionDescription/ChampionDescription"
import styles from './ChampionCard.module.css'

const ChampionCard = ({championName, championNumber, url}) => {

  return (
    <div className={`cardWrapper col-sm-4 ${styles.championCard}`}>
     <ChampionDescription description = {championName}></ChampionDescription>
     <ChampionImage imageURL = {url} championName = {championName} championLink = {`/detail/${championNumber}`}> </ChampionImage>
    </div>
  )
}


export default ChampionCard;