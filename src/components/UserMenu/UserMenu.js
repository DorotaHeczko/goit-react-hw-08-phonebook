import { useDispatch, useSelector } from 'react-redux';
import operations from 'features/auth/auth-operations';
import  authSelectors  from '../../features/auth/auth-selectors';


const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 24,
  },
  avatar: {
    borderRadius: 50,
    marginRight: 8,
    backgroundColor: "rgb(220, 167, 201)",
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    fontSize: 20,
    color: "#fff",
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "rgba(187, 68, 68, 1)",
    border: "1px solid",
    borderRadius: 50,
    fontWeight: 700,
    fontSize: 16,
    color: "#fff",
  },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    

    return (
        <div style={styles.container}>
            <span style={styles.name}>Welcome, {name}</span>
            <button style={styles.button} type="button" onClick={() => dispatch(operations.logOut())}>
                Logout
            </button>
        </div>
    );
}