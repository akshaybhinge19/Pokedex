import {Link } from 'react-router-dom';
import '../App.css';


function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        boxShadow:'0.5vw 0.5vw 0.5vw brown',
        textShadow:'0.5vw 0.5vw 0.5vw brown',
        marginTop:'10px',
        borderRadius:'5px',
        fontFamily:'-apple-system'
      }}
    >
      <img className='mainImage'
        src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png"
        alt="poke ball"
        height="75px"
      />{' '}
      <Link to='/' style={{textDecoration:'none'}}><h1>My Pokedex</h1></Link>      
    </header>
  );
}

export { Header };
