import { HashRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Login from './component/login/login';
import Maker from './component/maker/maker';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login authService={authService} />} />
          <Route
            exact
            path="/"
            element={
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
