import { getChampionInfo } from "../../../utils/league"
import cache from "../../../middleware/cache"

const handler = async (req, res) => {

  const cachedInfo = cache.get("championInfo");
  if(cachedInfo){
   res.send(cachedInfo);
   return;
  }

  const championInfo = await getChampionInfo();

  if(championInfo.ERROR){
    res.status(204).send(championInfo);
    return;
  }
  cache.set("championInfo", championInfo);
  res.send(championInfo);
}

export default handler;