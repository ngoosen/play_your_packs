import './App.scss';

import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Page404 from './components/ui/Page404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}

export default App;
