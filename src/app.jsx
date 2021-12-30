import styles from './app.module.css';
import Header from './component/header/header';
import Login from './component/login/login';
import Maker from './component/maker/maker';

function App() {
  return (
    <div className={styles.app}>
      {/* <Login /> */}
      <Maker />
    </div>
  );
}

export default App;
