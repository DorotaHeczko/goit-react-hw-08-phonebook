import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import  authSelectors  from '../features/auth/auth-selectors';



const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    border: "1px solid rgb(226, 121, 186)",
    backgroundColor: "#ffeaeargba(249, 142, 142, 1)",
    backgroundImage: "linear-gradient(90deg, rgba(249, 142, 142, 1) 0%, rgba(41, 53, 86, 1) 100%)",
  },
};

const  AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
    
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;