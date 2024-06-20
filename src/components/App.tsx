// import logo from './logo.svg';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import styles from '../styles/app.module.css';
import Catalog from './Catalog';
import Selected from './Selected';

function App() {

  const { pathname } = useLocation();

  const catalogClassName = `${styles.header__link} ${pathname === '/' ? styles.header__link_current : ''}`;
  const selectedClassName = `${styles.header__link} ${pathname === '/selected' ? styles.header__link_current : ''}`;

  return (

    <div className={styles.app}>
      <header className={styles.header}>
        <Link to="/" className={catalogClassName}>Каталог</Link>
        <Link to="/selected" className={selectedClassName}>Избранное</Link>
      </header>

      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/selected" element={<Selected />} />
      </Routes>

    </div>

  );
}

export default App;
