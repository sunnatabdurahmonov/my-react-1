import {useState} from 'react'
import './ComponentA.scss'
const ComponentA = () => {
    const [count,setCount] = useState(0)
    const  [color, setColor] = useState(false)
    const [modal , setmodal] = useState(false)

    const handleCount = () => {
        setCount(count + 1)
    }
    const handleSetCount = () => {
        setCount(count -1)
    }

    const changeColor = () =>{
        setColor(!color)
    }
    const changemodal = () => {
        setmodal(!modal)
    }

  return (
    <div className={`${color ? 'dark' : 'div'}`}>
        {
            count
        }

        <div className="modal">
            
        </div>
         <button onClick={handleCount}>Submit</button>
         <button onClick={handleSetCount}>-Submit</button>
         <button onClick={changeColor}>Color</button>
    </div>
  )
}

export default ComponentA
