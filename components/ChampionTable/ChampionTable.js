import { useState, useEffect } from 'react';
import { splitObjectIntoArrays } from "../../utils/object"
import ChampionRow from "../ChampionRow/ChampionRow";
import styles from './ChampionTable.module.css'

const ChampionTable = ({cards}) => {

  const [loadedData, loadData] = useState({
   loaded:false,
   championInfo: {}
  });

  const getData = async () => {
    if(!loadedData.loaded){      
      const champResponse = await fetch(`/api/v1/championInfo`);
      
      if(champResponse.status === 204){
       loadData({
        loaded:true,
        championInfo: {}
       });
       return
      }
      const championInfo = await champResponse.json();

      loadData({
        loaded:true,
        championInfo
      });

    }
  }

  useEffect(getData, [loadedData]);

  return (
    <div className = {`championTable container ${styles.championTable}`}>
      {
        loadedData.loaded === true ? 
        splitObjectIntoArrays(cards, 3).map((value, index) => {
         return(
          <ChampionRow key = {'championRow' + index} cards= {value} champInfo = {loadedData.championInfo}/>
         )
        }) : "Loading"
      }
    </div>
  )
}


export default ChampionTable;