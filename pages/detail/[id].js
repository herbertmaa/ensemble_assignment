import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ChampionImage from "../../components/ChampionImage/ChampionImage";
import ChampionRole from "../../components/ChampionRole/ChampionRole"
import ChampionDescription from "../../components/ChampionDescription/ChampionDescription";
import 'bootstrap/dist/css/bootstrap.css';
import { removeSpaces } from "../../utils/string";

const Detail = () => {

 const router = useRouter()
 const { id } = router.query;

 const [loadedData, setLoaded] = useState({
  loaded:false,
  data:{}
 })


 const loadChampionInfo = async () => {
  if(!loadedData.loaded){
   const response = await fetch("/api/v1/championInfo");
   
   if(response.status === 204){
    setLoaded({
     loaded:true,
     championInfo: {}
    });
    return
   }
   
   const championInfo = await response.json();

   setLoaded({
     loaded:true,
     championInfo
    });

   }
 }
 
 useEffect(loadChampionInfo, [loadedData]);

 const loadChampionContent = () => {

  const championName = removeSpaces(loadedData.championInfo[id]?.name) || "None";

  return(
   <>
    <ChampionImage championName={championName} imageURL={`/images/champions/RiotX_ChampionList_${championName}.jpg`}/>
    <ChampionDescription description = {loadedData.championInfo[id].roles}> </ChampionDescription>
  
    {
     loadedData.championInfo[id].roles.map((roleType) => {
      return <ChampionRole key = {roleType} type = {roleType}/>
     })
    }
   </>
  )
 }
 const championName = 'Champion Name';

  return (
    <div className="container">
      <Head>
        <title> {championName} | Details </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

       {loadedData.loaded === true ? loadChampionContent(): "Loading"}

      </main>

    </div>
  );
}
export default Detail;