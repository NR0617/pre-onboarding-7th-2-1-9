import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPage';

const Router = () => {
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/detail' element={<CarDetailPage />} />
    </Routes>
  )
}

export default Router