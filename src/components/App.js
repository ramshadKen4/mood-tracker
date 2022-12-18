import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Calender from './Calender';
import SignupPage from './Signup';
import Login from './Login';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <div className='Header'>
      <Header/>
      </div>
      <main className='App-body'>
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Calender></Calender>}>
        </Route>
        <Route path='/signup' element={<SignupPage/>}>
        </Route>
        <Route path='/login' element={<Login/>}>
        </Route>
        </Routes>
        </BrowserRouter>
        <div className='Calender'>
        </div>
      </main>
    </div>
  );
}

export default App;
