import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  
  function handleClick(){
    alert('Button Clicked')
  }

  const handleClick2 = () =>{
    alert("Again Button Clicked")
  }


  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <div>
        <h3>React core concepts - 2</h3>
        <Users></Users>
        <Friends></Friends>
        <Team></Team>
        <Counter></Counter>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleClick2}>Click Me Again</button>
        <button onClick={()=>{alert('Third clicked')}}>Click Me More</button>
        <button onClick={()=> addToFive(3)}>Click Me 4</button>
      </div>
  
    </>
  )
}

export default App
