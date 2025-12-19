import './App.css'
import AllHeaddings from './components/AllHeaddings'
import Button from './components/Button'
import Container from './components/Container'
import Greet from './components/Greet'
import Headding from './components/Headding'
import Input from './components/Input'

function App() {

  


  const data=[
    {
      firstName:"naresh",
      lastName:"Sanjeev"
    }, {
      firstName:"kumar",
      lastName:"Sanjeev"
    }, {
      firstName:"Ajay",
      lastName:"Veera"
    }
  ]
 

  return (
    <>
    <Greet name="naresh" age={20} isLogin={true} />
    <AllHeaddings>
      <Headding user={data} />
    </AllHeaddings>
    <Button handleClick={(e)=>{
      console.log(e);
    }}/>
    <Input handleOnChange={(e)=>console.log(e.target.value)}/>
   {/* style props  */}
   <Container style={{border:"2px solid red"}}/>
    </>
  )
}

export default App
