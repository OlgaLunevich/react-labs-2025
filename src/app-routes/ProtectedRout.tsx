import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './portectedRoutemessage.css';
import { useNavigate } from 'react-router-dom';

interface IProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute= ({children} : IProtectedRouteProps) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const loading = useSelector((state: RootState) => state.auth.loading);
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    const closeModal = () => {
        setShowModal(false);
        navigate('/Login_page');
    };

    if(loading) {
        return <div className="pleaseLogin">Loading...</div>;
    }
    if(!user) {
        return (
            <>
                {showModal && (
                    <div className="modalWindow">
                        <div className="modalContent">
                            <h3>You are not logged</h3>
                            <p>Please, for making purchases login.</p>
                            <button className="modalButton" onClick={closeModal}>OK</button>
                        </div>
                    </div>
                )}
            </>
        );
    }
    return <>{children}</>;
};

export default ProtectedRoute;