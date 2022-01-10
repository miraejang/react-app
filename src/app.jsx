import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Login from './component/login/login';
import Maker from './component/maker/maker';

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter basename="/react-order-management-app">
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
      </BrowserRouter>
    </div>
  );
}

export default App;
