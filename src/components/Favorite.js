import { useState } from 'react';

function Favorite() {
  const [favs] = useState(function () {
    const value = localStorage.getItem('pokemons');
    if (value) {
      return JSON.parse(value);
    }
    return [];
  });

  return favs.length ? (
    <div style={{borderRadius:'5px',fontFamily: 'Raleway',boxShadow:'2px 2px 2px 2px lightblue'}}>
      <h3 style={{marginLeft:'15px'}}>Your Favorite Pokemons</h3>

      {favs.map((pokemon) => {
        return <div style={{display:'inline-block', marginLeft:'15px'}}>{pokemon.toUpperCase()}</div>;
      })}
    </div>
  ) : null;
}

export { Favorite };
