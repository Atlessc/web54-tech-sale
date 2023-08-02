import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles/styles.css'

export default function Layout() {
    return (
      <div className='app-container'>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    );
  }