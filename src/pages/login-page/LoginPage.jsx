import React, {useState} from 'react';
import './loginPage.css';
import { auth} from "../../firebase.js";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {validateLoginForm} from "../../components/helpers.js";
import {useSignOut} from "react-firebase-hooks/auth";

const LoginPage = () => {
    const [activeButton, setActiveButton] = useState('Submit');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [signOut, loadingSignOut, errorSignOut ] = useSignOut(auth);

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
            console.log("Something wrong during log in... error: ",error.message);
        }
        finally {
            setLoading(false);
        }

    };

    const handleCancelButton = async () => {
        setActiveButton('Cancel');
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
                               <input style={{marginLeft:"81px"}}
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
                           <button type='submit' disabled={!email || !password}
                               onClick={() => handleButtonClick('Submit')}
                               className={activeButton === 'Submit' ? 'active' : ''}
                           >Submit
                           </button>
                           <button
                               type="button"
                               onClick={() => handleCancelButton()}
                               className={activeButton === 'Cancel' ? 'active' : ''}
                           >Cancel
                           </button>
                       </div>
                   </form>
               </div>
           </main>
        </>
    );
};
export default LoginPage;


