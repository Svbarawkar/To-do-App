import { useEffect, useState } from "react";
import { app } from "../Authentication/FirebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import '../CSS/style.css';
import TodoList from '../Components/TodoList';



const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const App = () => {
    const [user, setUser] = useState<any | null>(null); // Type annotation for user state

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch((error) => console.log(error));
    };

    const handleLogout = () => {
        setUser(null);
        auth.signOut();
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className="login-container">
            {!user && (
                
                <img
                    className="login-button"
                    onClick={() => handleLogin()}
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20240520175106/Google_SignIn_Logo.png"
                    alt="NA"
                />
            )}
            {user && (
                <>
                    <div className="user logout-container">
                        <h1>Your Successfully Logged In</h1>
                        <h2>Name: {user.displayName}</h2>
                        <h2>Email: {user.email}</h2>
                        <img src={user.photoURL} alt="N/A" />
                        <button onClick={() => handleLogout()} className="logout-button">
                            Log Out
                        </button>
                        <TodoList/>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
