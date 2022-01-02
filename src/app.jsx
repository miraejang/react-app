import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Header from './component/header/header';
import Login from './component/login/login';
import Maker from './component/maker/maker';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login authService={authService} />} />
          <Route exact path="/" element={<Maker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
