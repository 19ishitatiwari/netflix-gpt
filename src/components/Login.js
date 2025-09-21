import React, {useState} from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
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
                <input type='text' placeholder='Full Name' className='p-4 rounded-lg my-2 w-full bg-transparent border'/>
            }
            <input type='email' placeholder='Email Address' className='p-4 rounded-lg my-2 w-full bg-transparent border'/>
            <input type='password' placeholder='Password' className='p-4 rounded-lg my-2 w-full bg-transparent border'/>
            <button className='bg-red-600 p-4 rounded-lg my-4 font-bold w-full'>
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
