const Starship = (props) => {

  return (
        <section className='spaceship-container'>
          <h2>{props.starship.name}</h2>
          <p>Model: {props.starship.model}</p>
          <p>Class: {props.starship.starship_class}</p>
          <p>Price: {props.starship.cost_in_credits} credits</p>
          <p>Starship Manufacturer: {props.starship.hyperdrive_rating}</p>
          <p>Hyperdrive Rating: {props.starship.manufacturer}</p>
        </section>
      );
  };
  
  export default Starship;