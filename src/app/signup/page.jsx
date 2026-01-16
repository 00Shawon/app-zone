import React from 'react';
import SignupForm from '../components/SignupForm';

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        
                    <h2 className="text-2xl font-semibold text-gray-800 text-center">
                        Welcome to App Zone
                    </h2>
                    <p className="text-sm text-gray-500 text-center mt-1">
                        Please sign up
                    </p>
        
                    <SignupForm/>
        
                </div>
            </div>
    );
};

export default Signup;