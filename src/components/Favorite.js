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
    <div style={{borderRadius:'5px',fontFamily: 'Raleway',boxShadow:'1px 1px 1px 1px brown', padding:'10px'}}>
      <h3>Your Favorite Pokemons</h3>

      {favs.map((pokemon) => {
        return <div style={{display:'inline-block', marginLeft:'15px'}}>{pokemon.toUpperCase()}</div>;
      })}
    </div>
  ) : null;
}

export { Favorite };
