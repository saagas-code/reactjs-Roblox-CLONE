import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Cadastro } from './pages/cadastro';
import { Logar } from './pages/logar';
import { Home } from './pages/home';
import { NotFound } from './pages/notfound';
import { RequireAuth } from './contexts/Auth/RequireAuth'
import css from './components/template.module.css'
import { Config } from './pages/config';
import { Game } from './pages/game';
// import {RouteList} from './RouteList'





function App() {
  
  

  return (
    /* <div className="App">
      
      /*<RouteList />
      
    </div> */
    <div className={css.fundo2}>
      <Routes>
        <Route path='/' element={<Cadastro/>} />
        <Route path='/login' element={<Logar/>} />
        <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/home/config' element={<RequireAuth><Config /></RequireAuth>} />
        <Route path='/home/games/:slug' element={<RequireAuth><Game /></RequireAuth>} />
        <Route path='/notfound' element={<NotFound/>} />
        
      </Routes>
    </div>
  );
}

export default App;
