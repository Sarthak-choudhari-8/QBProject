// = ++ +




import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import Admin from './pages/Admin'





function App() {
  

  return (
    <>
<BrowserRouter>
<Routes>


<Route path='/'  element={<Login />} />
<Route path='/home'  element={<Home />  }/>
<Route path='/feedback'  element={<Feedback />} />
<Route path='/admin'  element={<Admin />} />

</Routes>

</BrowserRouter>

    </>
  )
}

export default App
