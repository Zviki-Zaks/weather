import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from "./cmps/AppHeader";
import { About } from './pages/About';
import { Home } from "./pages/Home";
import './assets/scss/global.scss'
import { Forecast } from './pages/Forecast';
import { useDispatch, useSelector } from 'react-redux';
import { Popup } from './cmps/Popup';
import { setIsPopup } from './store/actions/weatherActions';

function App() {

  const onClick = () => {
    console.log('click')
  }
  const dispatch = useDispatch()
  const { isPopup } = useSelector(state => state.weatherModule)
  const togglePopup = () => {
    dispatch(setIsPopup())
  }
  return (
    <Router>
      <div className="app dark">
        <AppHeader />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {isPopup && <Popup type={'prompt'} funcs={{ togglePopup, onClick }} />}

        </main>
      </div>
    </Router>
  );
}

export default App;
