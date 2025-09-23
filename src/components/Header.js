// import React from 'react'

// const Header = () => {
//   return (
//     <div className='z-10 absolute px-2 py-4 flex justify-between w-screen'>
//       <img src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
//         alt='Netflix Logo'
//         className='w-44'
//         />
//         <div>
//             <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
//             alt='Profile Avatar'
//             className='w-10 h-10 rounded-lg float-right cursor-pointer'
//             />

//             <span >(Sign Out)</span>
//         </div>
//     </div>
//   )
// }

// export default Header

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // install heroicons
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const [open, setOpen] = useState(false);

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

    const signOutFunction = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }

     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearch());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }
    
  return (
    <div className="z-30 absolute px-2 py-4 flex justify-between w-screen items-center bg-gradient-to-b from-black ">
      {/* Netflix Logo */}
      <img
        src={LOGO}
        alt="Netflix Logo"
        className="w-44"
      />

      {/* Profile + Dropdown */}
      { user && (
        <div className="flex items-center gap-2">
            {
                showGptSearch && 
                <select className="p-2 bg-white bg-opacity-20 text-white rounded-lg" onChange={handleLanguageChange}>
                    {
                        SUPPORTED_LANGUAGES.map(lang => <option className="bg-white bg-opacity-20 text-black hover:bg-gray-100" key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                    }
                </select>
            }
            <button className="p-2 m-2 bg-white bg-opacity-20 text-white hover:bg-opacity-50 rounded-lg" onClick={handleGptSearchClick}>
                {!showGptSearch? "GPT Search" : "Homepage" }
            </button>
            <div className="relative">
                <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setOpen(!open)}
                >
                <img
                    src={user.photoURL}
                    alt="Profile Avatar"
                    className="w-10 h-10 rounded-lg"
                />
                <ChevronDownIcon
                    className={`mr-4 w-3 h-3 text-white transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                    }`}
                />
                </div>

                {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg ">
                        <ul className="py-2">
                        <li className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">{user.displayName}</li>
                        <li>
                            <button
                            onClick={signOutFunction}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                                Sign Out
                            </button>
                        </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default Header;

