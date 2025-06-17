//This file is saved for the future


// import {auth} from "../firebase";
// import React, {createContext, useContext, useState, useEffect} from "react";
// import {User, onAuthStateChanged} from "firebase/auth";
//
// interface IAuthContextProps {
//     user: User | null,
//     loading: boolean
// }
//
// interface IAuthProviderProps {
//     children: React.ReactNode;
// }
//
// const AuthContext = createContext<IAuthContextProps | null>(null);
//
// const AuthProvider = ({children}: IAuthProviderProps) => {
//     const [user, setUser] = useState<User|null>(null);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//             console.log('Firebase user:', firebaseUser);
//             setUser(firebaseUser);
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, []);
//
//     return (
//         <AuthContext.Provider value={{user, loading}}>
//             {children}
//         </AuthContext.Provider>
//     )
// };
//
// // const useAuth = () => useContext(AuthContext);
// const useAuth = (): IAuthContextProps => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("Can't find context");
//     }
//     return context;
// };
// export { AuthProvider, useAuth };
