import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { AppHeader } from "./cmps/AppHeader";
import { About } from './pages/About';
import { Home } from "./pages/Home";
import './assets/scss/global.scss'
import { Forecast } from './pages/Forecast';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from './cmps/Modal';
import { setIsModal } from './store/actions/weatherActions';

function App() {

  // const onClick = () => {
  //   console.log('click')
  // }
  // const dispatch = useDispatch()
  // const { isModal } = useSelector(state => state.weatherModule)
  // const toggleModal = () => {
  //   dispatch(setIsModal())
  // }
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
          {/* {isModal && <Modal type={'prompt'} funcs={{ toggleModal, onClick }} />} */}

        </main>
      </div>
    </Router>
  );
}

export default App;
