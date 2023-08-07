import './App.css';
import capa from './img/livro.jpeg'
import audiobook from './audio/audiobook.mp3'

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>A planta que cura todas as dores</h3>
            </div>
          </div>
            <div className="item-menu">
              <a href="https://drive.google.com/file/d/1jdre4uQJpyWkYUGVDYHftWi7cflm2aXD/view?usp=sharing">Dowload</a>
            </div>
        </div>
      </div>
      <div className="conteudo">
        <div className="center2">
          <div className="box">
            <div className="resumo">
              <h1>Resumo</h1>
              <br/>
              <p>Certo dia, Bob esponja e Patrick foram chamar Sandy para caçar águas vivas e ao encontrar com Sandy, se deparam com ela passando muito mal.</p>
              <p>Bob Esponja ao andar pela rua, se esbarra com um feiticeiro que dizia poder ajudá-lo com o que precisava, mas com duas condições. A primeira condição era que o Bob Esponja e o Patrick tinham que falar uma uma frase em voz alta segurando uma corrente brilhante. A segunda condição era que Bob Esponja e Patrick deveria encontrar uma erva para salvar a vida de Sandy. E ai começa uma grande aventura contra o tempo para poder salvar a vida de sua preciosa amiga Sandy.</p>
              <br/>
              <div className="player">
                <div className="imgbox">
                  <img src={capa} alt="capa do livro" />
                </div>
                <audio src={audiobook} type="audio/mp3" controls></audio>
              </div>
              <div className="play">
              <h3>Ouvir audiobook:</h3>
              <br/>
              <audio controls>
                <source src={audiobook} type="audio/mp3"/>
              </audio>
              </div>
              <br/>
              <br/>
              <h3>Playlist com as musicas:</h3>
              <br/>
              <div className="spotfy">
                <iframe src="https://open.spotify.com/embed/playlist/0RDPLyNZonCVtkzSaury9z?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
            </div>
            <div className="capa">
              <img src={capa} alt="capa do livro" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
