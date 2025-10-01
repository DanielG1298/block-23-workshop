import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  /*Detail on episodes*/
  function EpisodeDetails(){
  if (!selectedEpisode){
    return (
      <section className="details">
        <h2>Episode details</h2>
        <p>select an episode</p>
      </section>
    );
  }
  return (
    <section className="details">
      <h2>Episode {selectedEpisode.id}</h2>
      <h2>{selectedEpisode.title}</h2>
      <p>{selectedEpisode.description}</p>
    </section>
  );
  }
  
/*function to select episodes*/
function AvailableEpisodes(){
  return (
    <section className="episodes">
      <h2>Episodes</h2>
      <ul classname="episodelist">
        {episodeList.map((episode) =>(
          <li key={episodes.id} onClick={() => setSelectedEpisode(episode)}>
          {episode.title}
          </li>))}
          
        </ul>

    </section>);
  
}
 return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <AvailableEpisodes />
        <EpisodeDetails />
      </main>
    </>
 );
}