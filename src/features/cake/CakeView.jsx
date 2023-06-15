import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice' ;


const CakeView = () => {

  const numOfCakes =  useSelector((state) =>  state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={()=> dispatch(ordered())} >order cake</button>
      <button onClick={()=> dispatch(restocked(5))} >Restock cake</button>

    </div> 
  )
}

export default CakeView