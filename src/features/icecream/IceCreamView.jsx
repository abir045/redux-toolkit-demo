 import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'
import { useState } from 'react'

const IceCreamView = () => {
  const [value, setValue] = useState(1)

  const numOfIcecreams =  useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
    
  return (
    <div>
      <h2>Number of IceCream - {numOfIcecreams} </h2>
      <button onClick={()=> dispatch(ordered())} >order IceCream</button>
      
      {/* putting the restock value with  user input */}
      
      <input type='number' value={value} onChange={(e) => setValue(parseInt(e.target.value)) } />
      <button onClick={()=> dispatch(restocked(value))} >Restock IceCream</button>

    </div>
  )
}

export default IceCreamView