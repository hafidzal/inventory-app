import React, {useState} from "react";
// import { Link } from "@reach/router";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler = 
            (event,email, password) => {
                event.preventDefault();
                console.log('email: ', email, ' pass:', password);
    };

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if(name === 'email') {
            setEmail(value);
        }
        else if(name === 'password'){
            setPassword(value);
        }
    };

  return (
    <div className="App">
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
            </h2>
            {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
            </div>
            <form className="mt-8 space-y-6" >
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input 
                            id="email-address" 
                            name="email" 
                            type="email" 
                            autoComplete="email" 
                            value={email} 
                            required 
                            onChange = {(event) => onChangeHandler(event)}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            autoComplete="current-password" 
                            value = {password}
                            required 
                            onChange = {(event) => onChangeHandler(event)}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                </div>
                <div>
                    <button 
                        type="submit" 
                        onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign in
                    </button>
                </div>
                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Sign in with Google
                    </button>
                </div>  
            </form>
        </div>
        </div>
    </div>
  );
};
export default SignIn;