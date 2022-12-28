import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../style/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calender from './Calender';
import SignupPage from './Signup';
import Login from './Login';
import Header from './Header';
import { useEffect, useState } from 'react';
import Firebase from '../config/firebase';
import ButtonGroup from '../components/ButtonGroup';
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])
  const Home = <div><Calender></Calender><ButtonGroup user={user}></ButtonGroup></div>
  return (
    <div className="App">
      <div className='Header'>
        {
          user ? <Header user={user.displayName} /> : <Header />
        }
      </div>
      <main className='App-body'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={Home}>
            </Route>
            <Route path='/signup' element={user ? <SignupPage isLogged /> : <SignupPage />}>
            </Route>
            <Route path='/login' element={user ? <Login isLogged /> : <Login />}>
            </Route>
          </Routes>
        </BrowserRouter>

      </main>
    </div>
  );
}
export default App;
