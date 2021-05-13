import cache from "../../../middleware/cache";
import { getChampionRotate } from "../../../utils/league";

const handler = async (req, res) => {

  // Check the cache before making a call
  let cachedRotations = cache.get("championRotation");

  if(cachedRotations){
   res.send(cachedRotations);
   return;
  }
  
  // Cached response is no longer available, make a fetch request
  const champions = await getChampionRotate();

  if(champions['ERROR']){
    res.status(204).send(champions);
    return;
  }

  // Store the response into cache
  cache.set("championRotation", champions);
  res.send(champions);

}



export default handler;