// = ++ +




import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import Admin from './pages/Admin'
import AddQues from './pages/AddQues'
import DelQues from './pages/DelQues'
import FeedbackDB from './pages/FeedbackDB'


function App() {
  

  return (
    <>
<BrowserRouter>
<Routes>


<Route path='/'  element={<Login />} />
<Route path='/home'  element={<Home />  }/>
<Route path='/feedback'  element={<Feedback />} />
<Route path='/admin'  element={<Admin />} />

<Route path='/DelQues'  element={<DelQues />} />
<Route path='/AddQues'  element={<AddQues />} />
<Route path='/feedbackDB'  element={<FeedbackDB />} />

</Routes>

</BrowserRouter>

    </>
  )
}

export default App
