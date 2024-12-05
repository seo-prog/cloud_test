import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Menupage from './pages/MenuPage';
import Main from './pages/Main';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='menupage' element={<Menupage/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
