import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { pokemons } from '../pokemonList';
import { PokemonGallery } from '../components/PokemonGallery';
import { Link } from 'react-router-dom';
import { Favorite } from '../components/Favorite';
import './HomePage.css';

function HomePage() {
  const [selection, setSelection] = useState(null);
  return (
    <>
      <h1>Search</h1>
      <div style={{ marginTop: '10px', display: 'flex', marginBottom:'10px' }}>
        <Autocomplete
          id="combo-box-demo"
          options={pokemons}
          getOptionLabel={(option) => {
            const { name } = option;
            return name[0].toUpperCase() + name.substr(1);
          }}
          style={{ width: 300, flexGrow: 1, marginRight: '20px' }}
          renderInput={(params) => (
            <TextField {...params} label="Search Pokemons" variant="outlined" />
          )}
          onChange={function (event, currentSelection) {
            setSelection(currentSelection);
          }}
        />

        <Link
          to={selection ? '/pokemon/' + selection.name : '/'}
          component={function (props) {
            return <Button variant="contained" color="primary" {...props} style={{boxShadow:'2px 2px 2px 2px brown'}}/>;
          }}
        >
          Go to Pokemon
        </Link>
      </div>
      <Favorite />
      <h1>Pokemon Gallery</h1>
      <PokemonGallery />
    </>
  );
}

export { HomePage };
