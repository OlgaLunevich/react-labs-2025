import React, {useState, useEffect} from 'react';
import './loginPage.css';
import {auth, db} from "../../firebase.js";
import { setDoc, doc } from "firebase/firestore";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {validateLoginForm} from "../../components/helpers.js";
import {useSignOut} from "react-firebase-hooks/auth";
import {onAuthStateChanged} from "firebase/auth";

const LoginPage = () => {
    const [activeButton, setActiveButton] = useState('Login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [signOut, loadingSignOut, errorSignOut ] = useSignOut(auth);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const values = { email, password };
        console.log({values});


        const errors = validateLoginForm(values);
        if (Object.keys(errors).length > 0) {
            setError(errors);
            setLoading(false)
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log("User Logged in", userCredential.user);
        }
        catch (error) {
            setError({ general: error.message });
            console.log("1 Something wrong during log in... error: ",error.message);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {

                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const uid = userCredential.user.uid;

                    console.log('New user created', uid);

                    await setDoc(doc(db, 'users', uid), {
                            email: email,
                            createdAt: new Date(),
                        }
                    )
                } catch (createError) {
                    console.log("Error creating user:", createError);
                    setError({ general: createError.message });
                }

            } else {
                setError({ general: error.message });
                console.log("2 Something wrong during log in... error: ",error.message);
            }
        }
        finally {
            setLoading(false);
        }

    };

    const handleLogoutButton = async () => {
        setActiveButton('Logout');
        setEmail('');
        setPassword('');
        setError(null);
        console.log("Form cleaned");
        console.log({ name: '', password: '' });

        try {
            await signOut();
            console.log("User logged out");
        }
        catch (error) {
            console.log("Something wrong during log out... error: ",error);
        }

    };

    return (
        <>
           <main className="mainLoginPage">
               <div className="loginPageContainer">
                   <div className="loginPageFormTitle">Log in</div>
                   <form className="loginPageForm" onSubmit={handleSubmitForm}>
                       <div className="loginFormRow">
                           <label>Email
                               <input style={{marginLeft: "81px"}}
                                      type="email"
                                      autoComplete="email"
                                      placeholder="еmail"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                               />
                           </label>
                           {error?.email && <div className="error-message">{error.email}</div>}
                       </div>
                       <div className="loginFormRow">
                           <label>Password
                               <input type="password"
                                      placeholder="••••••••••••••••"
                                      autoComplete="current-password"
                                      value={password}
                                      onChange={(e) => setPassword(e.target.value)}
                               />
                           </label>
                           {error?.password && <div className="error-message">{error.password}</div>}
                       </div>
                       <div className="loginPageButtons">
                           {!currentUser ? (
                               <>
                                   <button
                                       type='submit'
                                       disabled={!email || !password}
                                       onClick={() => handleButtonClick('Login')}
                                       className={activeButton === 'Login' ? 'active' : ''}
                                   >
                                       Login
                                   </button>
                                   <button
                                       type="button"
                                       onClick={() => {
                                           setEmail('');
                                           setPassword('');
                                           setError(null);
                                           setActiveButton('Cancel');
                                       }}
                                       className={activeButton === 'Cancel' ? 'active' : ''}
                                   >
                                       Cancel
                                   </button>
                               </>
                           ) : (
                               <button
                                   type="button"
                                   onClick={() => handleLogoutButton()}
                                   className={activeButton === 'Logout' ? 'active' : ''}
                               >
                                   Logout
                               </button>
                           )}
                       </div>
                   </form>
               </div>
           </main>
        </>
    );
};
export default LoginPage;


