import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import CarDetailPage from './pages/CarDetailPage';
import CarPage from './pages/CarPage';

const Router = () => {
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/car/:id' element={<CarPage />} />
    </Routes>
  )
}

export default Router