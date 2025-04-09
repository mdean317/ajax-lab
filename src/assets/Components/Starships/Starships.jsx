import Starship from '../Starship/Starship.jsx';

const Starships = (props) => {

  return (
    <div className='starships-container'>
          
      {props.starships.length > 0 ?
        props.starships.map((starship, index) => {
          
          return (<Starship key={index} starship={starship}/>)
        })
        : <h3>No spaceships to show.</h3>}
    </div>
  )
}

export default Starships;