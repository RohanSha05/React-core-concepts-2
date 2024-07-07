import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)

    const handleAdd = () =>{
        const newCount = count + 1
        setCount(newCount)
    }

    return (
        <div style={{border: '2px solid yellow'}}>
            <h1>Counter: {count} </h1>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}