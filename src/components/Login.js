import React, {useState, useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        const validateMsg = checkValidData(email.current.value, password.current.value, isSignInForm ? undefined : name.current.value);
        setErrMsg(validateMsg);

        if(validateMsg) return;
        if(!isSignInForm) {
            // Handle Sign In
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    // const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoURL }));
                    }).catch((error) => {
                        setErrMsg(error.message);
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode + " - " + errorMessage);
                });
        } else {
            // Handle Sign Up
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(errorCode + " - " + errorMessage);
                });
        }
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg'
                alt='Netflix Background'
                />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black"></div>
        <form className='absolute p-12 bg-black/60 w-1/3 my-44 mx-auto left-0 right-0 text-white'>
            <h1 className='text-3xl font-bold py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm &&
                <input ref={name} type='text' placeholder='Full Name' className='p-4 rounded-lg my-2 w-full bg-transparent border'/>
            }
            <input ref={email} type='email' placeholder='Email Address' className='p-4 rounded-lg my-2 w-full bg-transparent border'/>
            <input ref={password} type='password' placeholder='Password' className='p-4 rounded-lg my-2 w-full bg-transparent border'/>
            <p className='font-bold text-red-600 text-sm pt-2 mt-2'>{errMsg}</p>
            <button className='bg-red-600 p-4 rounded-lg my-4 font-bold w-full' onClick={handleButtonClick}>
                {isSignInForm? "Sign In" : "Sign Up"}
            </button>
            {isSignInForm? 
                <p>New to Netflix? <span className='font-bold cursor-pointer hover:underline' onClick={toggleSignInForm}>Sign Up</span> now!</p> :
                <p>Already have an account? <span className='font-bold cursor-pointer hover:underline' onClick={toggleSignInForm}>Sign In</span> now!</p>
            }
        </form>
    </div>
  )
}

export default Login
