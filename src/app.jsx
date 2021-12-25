import styles from './app.module.css';
import Header from './component/header/header';
import Orders from './component/orders/orders';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Orders />
    </div>
  );
}

export default App;
