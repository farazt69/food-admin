import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Sample from './pages/Sample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Sample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
