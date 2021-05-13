import ChampionDescription from "../ChampionDescription/ChampionDescription"
import styles from './ChampionCard.module.css'

const ChampionCard = ({championName, description, imageURL, stats}) => {


  return (
    <div className={`cardWrapper col-sm-4 ${styles.championCard}`}>
     <ChampionDescription description = {championName}></ChampionDescription>
     <ChampionImage imageURL={imageURL} imageURL = {imageURL}> </ChampionImage>
    </div>
  )
}


export default ChampionCard;