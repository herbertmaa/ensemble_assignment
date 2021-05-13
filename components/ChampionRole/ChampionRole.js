import { ROLE_TYPES } from "../../utils/constants"

const ChampionRole = ({type}) => {

 const checkType = () => {

  console.log("I am here");
  if(!type) return "none";

  if(!type || !ROLE_TYPES.includes(type)){
   return "none"
  }

  return type;
 }
 return (
  <img
   src={`/images/role_icons/${checkType()}.png`}
   alt={`Role Image for ${type}`}
   width='50px'
  />
 )
}


export default ChampionRole;