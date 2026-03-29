import { useDispatch } from 'react-redux';
import TopNavbar from './components/organisms/TopNavbar';
import Login from './components/templates/Login';
import Pages from './pages';
import { login } from './lib/redux/userSlice';
import { ToastContainer } from 'react-toastify';

function App() {


  const dispatch = useDispatch();

  // Check both localStorage and sessionStorage for the "isLoggedIn" key
  const userJson = localStorage.user ?? sessionStorage.user;

  if (userJson) {
    const user = JSON.parse(userJson);
    dispatch(login(user));
  }

  return (
      <div>
        <TopNavbar />
        <Pages />
        <Login />

        <ToastContainer position='bottom-left' />
      </div>
    )
  }

  export default App