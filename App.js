import {BrowserRouter, Routers, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'



export default function App(){
  return (
    <div>
    <BrowserRouter>
    <Routers>
      <Route index element={<Home />}>
        <Route path="/home" element={<Home />} />
        <Route path ="about" element={<Contact/>} />
        <Route path="*" element={<NoPage />}/>

      </Route>
    </Routers>
    </BrowserRouter>
    </div>
  )
}