import { useState } from 'react';
import { pokemons } from '../pokemonList';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { sampleSize } from 'lodash';
import './component.css'
import { Favorite } from '../components/Favorite';


function GalleryItem(props) {
  const { children, pokemonName } = props;
  const [isInLocalStorage, setIsInLocalStorage] = useState(function () {
    const val = localStorage.getItem('pokemons');
    if (!val) {
      return false;
    }
    const jsArray = JSON.parse(val); // ["a"]
    const set = new Set(jsArray);
    return set.has(pokemonName);
  });
  return (
    <div className="galleryCell"
      style={{
        border: '1px solid lightblue',
        boxShadow: '5px 5px 5px brown',
        borderRadius: '1vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding:'3px',
        backgroundColor:'pink'
      }}
    >
      <div style={{ flexGrow: 1 }}>{children}</div>
      <img
        src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png"
        style={{ height: '50px', flexGrow: 2 }}
        alt="i'll come back to it"
      ></img>
      
      <Button
        onClick={function () {
          if (!isInLocalStorage) {
            setIsInLocalStorage(true);
            const key = 'pokemons';
            const val = localStorage.getItem(key);
            if (val) {
              const arr = JSON.parse(val); // converting string to js objects
              arr.push(pokemonName);
              const stringifiedArray = JSON.stringify(arr);
              localStorage.setItem(key, stringifiedArray);
            } else {
              const stringifiedArray = JSON.stringify([pokemonName]);
              localStorage.setItem(key, stringifiedArray);
            }
          }
          else{
            const key = 'pokemons';
            const val = localStorage.getItem(key);
            const arr = JSON.parse(val); // converting string to js objects
            // arr.push(pokemonName);
            const i = arr.indexOf(pokemonName);
            arr.splice(i,1);
            const stringifiedArray = JSON.stringify(arr);
            localStorage.setItem(key, stringifiedArray);
            setIsInLocalStorage(false);
            // alert(`${pokemonName} is removed from Favorite List`);
          }
        }}
        variant="contained"
        color={isInLocalStorage ? 'secondary' : 'primary'}
      >
        <FavoriteIcon />
      </Button>
    </div>
  );
}


function PokemonGallery() {
  const randomPokemonsStatic = pokemons.slice(0, 4);
  const randomPokemonsChanging = sampleSize(pokemons, 8);
  const randomPokemons = randomPokemonsStatic.concat(randomPokemonsChanging);
  console.log(randomPokemons);
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: '1fr 1fr 1fr 1fr',
        gridGap: '10px',
        height: '400px',
      } }
    >
      {randomPokemons.map((pokemon) => {
        const { name } = pokemon;
        return (
          <GalleryItem key={name} pokemonName={name}>
            <Link to={'/pokemon/' + name} 
            style={{textDecoration:'none', 
            color:'black',
            fontFamily:'"Helvetica Neue"',
            fontWeight:'bold'}}>{name.[0].toUpperCase() + name.substr(1)}</Link>
          </GalleryItem>
        );
      })}
    </div>
  );
}

export { PokemonGallery };
