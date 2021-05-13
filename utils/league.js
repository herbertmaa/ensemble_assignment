import { flattenArray } from "./array"
const CHAMPION_ROTATIONS_ENDPOINT = "/champion-rotations";

const getChampionInfo = async () => {
 try{

   const response = await fetch(process.env.COMMUNITY_DRAGON_URL_CHAMPION_SUMMARY);

   if(response.status !== 200) return ({
    'ERROR': error
   });

   const arr = await response.json();

   const json = flattenArray(arr);

   return json;

 }catch(err){
   return({
     'ERROR': err
   })
 }
}

const getChampionRotate = async () => {
 try{

   const response = await fetch(process.env.RIOT_API_URL + CHAMPION_ROTATIONS_ENDPOINT, {
     headers:{
       'X-Riot-Token': process.env.RIOT_API_KEY
     }
   });

   if(response.status === 403) return({"ERROR": response.statusText});
   const json = await response.json();

   return(json['freeChampionIds']);

 }catch(err){
   return({
     "ERROR": err
   })
 }
}

module.exports = {
 getChampionInfo,
 getChampionRotate
};