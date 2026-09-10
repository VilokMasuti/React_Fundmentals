import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Pratice from './pages/Pratice'
import Test from './pages/Test'

const App = () => {





  return (
    <BrowserRouter>
      <Routes>
<Route  path='/' element={<DashBoard/>}/>
<Route  path='/Pratice' element={<Pratice/>}/>
<Route  path='/Test' element={<Test/>}/>

      </Routes>



    </BrowserRouter>
  )
}

export default App
