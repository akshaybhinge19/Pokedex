import './App.css';
import { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { HomePage } from './pages/HomePage';
import { Route, Switch, useParams } from 'react-router-dom';
import { PokeApi } from './api/pokeApi';
import { Header } from './components/Header';

function getPokemonImageFromData(data) {
  const defaultImage =
    'https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png';
  const {
    sprites: { other },
  } = data;
  const officialArtwork = other['official-artwork'];
  return officialArtwork['front_default']
    ? officialArtwork['front_default']
    : defaultImage;
}

function Pokemon(props) {
  const { data } = props;
  if (!data) {
    return null;
  }

  // const { }
  return (
    <div style={{ width: '100%', display:'flex', justifyContent:'space-evenly',alignItems:'center'}}>
      <div>
        <h2>{data.name.toUpperCase()}</h2>
        <h2>Height: {data.height}</h2>
        <h2>Weight: {data.weight}</h2>
      </div>
      <div>
      <img
        src={getPokemonImageFromData(data)}
        width={300}
        alt={'poke ball'}
        height={300}
      />
      </div>
    </div>
  );
}

function PokemonPage() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState(null);
  const [isError, setIsError] = useState(false);

  const name = params.name;
  useEffect(
    function () {
      PokeApi.getPokemonByName(name)
        .then((data) => {
          setIsLoading(false);
          setPokemonData(data);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    },
    [name]
  );

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress color="secondary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        Network error, try after some time.
      </div>
    );
  }

  return (
    <div style={{
      border: '10px solid black',
      boxShadow: '5px 5px 5px lightblue',
      borderRadius: '25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding:'3px',
      backgroundColor:'lightgreen',
      margin:'50px',
    }}>
      {/* <h1>{params.name.toUpperCase()}</h1> */}
      <Pokemon data={pokemonData} />
    </div>
  );
}

function App() {
  return (
    <>
      <Container maxWidth="md" style={{}}>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pokemon/:name">
            <PokemonPage />
          </Route>
          <Route>
            <h1>No match</h1>
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
