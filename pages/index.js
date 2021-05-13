import ChampionTable from '../components/ChampionTable/ChampionTable'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


const Home = () => {

  const [championResults, setChampionsFetched] = useState({
    loaded:false,
    data:[]
  })

  const getCurrentChampions = async () => {
    if(!championResults.loaded){
      const response = await fetch("/api/v1/currentChampions");
      
      if(response.status === 204){
       setChampionsFetched({
        loaded:true,
        data: [-1]
       });
       return;
      }
      
      const json = await response.json();
      
      setChampionsFetched({
        loaded:true,
        data: json
      });
    }
  }

  useEffect(getCurrentChampions, [championResults]);

  return (
    <div className="container">
      <Head>
        <title> Champion Rotations </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ChampionTable cards = {championResults.data} />
      </main>

    </div>
  );
}
export default Home;