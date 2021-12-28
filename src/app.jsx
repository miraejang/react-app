import styles from './app.module.css';
import Header from './component/header/header';
import Maker from './component/maker/maker';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Maker />
    </div>
  );
}

export default App;
