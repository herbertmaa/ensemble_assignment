import { getChampionInfo } from "../../../utils/league"
import cache from "../../../middleware/cache"

const handler = async (req, res) => {

   // Check the cache before making a call
  const cachedInfo = cache.get("championInfo");
  if(cachedInfo){
   res.send(cachedInfo);
   return;
  }

    // Cached response is no longer available, make a fetch request
  const championInfo = await getChampionInfo();

  if(championInfo.ERROR){
    res.status(204).send(championInfo);
    return;
  }
  cache.set("championInfo", championInfo);
  res.send(championInfo);
}

export default handler;