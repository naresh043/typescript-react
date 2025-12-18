import './App.css'
import AllHeaddings from './components/AllHeaddings'
import Greet from './components/Greet'
import Headding from './components/Headding'


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
    ,<AllHeaddings>
      <Headding user={data} />
    </AllHeaddings>
    </>
  )
}

export default App
