import shadows from "@material-ui/core/styles/shadows";
import { makeStyles } from '@material-ui/core/styles';

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
      <img
        src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png"
        alt="poke ball"
        height="75px"
      />{' '}
      <h1>My Pokedex</h1>
    </header>
  );
}

export { Header };
