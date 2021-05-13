import ChampionCard from "../ChampionCard/ChampionCard";
import styles from './ChampionRow.module.css'

const ChampionRow = ({cards, champInfo}) => {

  return (
    <div className = {`row ${styles.championRow}`} >
      {
       cards.map((value, index) => {
        return <ChampionCard key={value} championName={champInfo[value].name} championNumber ={value} url={`/images/champions/RiotX_ChampionList_${champInfo[value].name}.jpg`}/>
       })
      }
    </div>
  )
}


export default ChampionRow;