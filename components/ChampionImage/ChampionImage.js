
const ChampionImage = ({imageURL, championName, championLink}) => {

  return (

   <a href = {championLink}>
     <img
     src={imageURL}
     alt={`Cover Image for ${championName}`}
     width='150px'
     href= {championLink}
    />
   </a>
  )
}


export default ChampionImage;