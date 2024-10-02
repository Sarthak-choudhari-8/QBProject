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
import About from './pages/About'


function App() {

  function setWithExpiry(key, value, ttl) {
    const now = new Date();
  
    // Create an object with the value and expiration time (current time + ttl)
    const item = {
      value: value,
      expiry: now.getTime() + ttl, // ttl is in milliseconds
    };
  
    // Save the object as a string in localStorage
    localStorage.setItem(key, JSON.stringify(item));
  }
  function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
  
    // If the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
  
    // Parse the stored object
    const item = JSON.parse(itemStr);
    const now = new Date();
  
    // Compare the expiry time with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, remove it from storage and return null
      localStorage.removeItem(key);
      return null;
    }
  
    // If the item is not expired, return its value
    return item.value;
  }

  return (
    <>
<BrowserRouter>
<Routes>

<Route path='/home'  element={<Home />  }/>

<Route path='/'  element={<Login />} />
<Route path='/feedback'  element={<Feedback />} />
<Route path='/admin'  element={<Admin getWithExpiry={getWithExpiry} setWithExpiry={setWithExpiry} />} />

<Route path='/DelQues'  element={<DelQues getWithExpiry={getWithExpiry}  />} />
<Route path='/AddQues'  element={<AddQues  getWithExpiry={getWithExpiry} />} />
<Route path='/feedbackDB'  element={<FeedbackDB  getWithExpiry={getWithExpiry} />} />
<Route path='/about' element={< About/>} />
</Routes>

</BrowserRouter>

    </>
  )
}

export default App
