import React, { useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { login, logout, setAuthLoading } from '../../redux/slicers/authSlice';

interface IAuthListenerProps {
    children: React.ReactNode;
}

const AuthListener = ({ children }: IAuthListenerProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            if (user) {
                dispatch(login(user.email || ''));
            } else {
                dispatch(logout());
            }
        });
        dispatch(setAuthLoading(false));
        return () => unsubscribe();
    }, [dispatch]);

    return <>{children}</>;
};

export default AuthListener;
