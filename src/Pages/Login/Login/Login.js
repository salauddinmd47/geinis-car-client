import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {googleSignIn} = useFirebase()
    return (
        <div>
            <h2>Please Sign In</h2>
            <button onClick={googleSignIn} className="btn-sm-warning">SignIn with Google</button>

        </div>
    );
};

export default Login;