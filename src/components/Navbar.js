import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [login, setLogin] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem('token')){
          setLogin(true);
        }
        else{
          setLogin(false);
        }
      }, [localStorage])
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);
    const [isLoginHovered, setIsLoginHovered] = useState(false);
    const [isLogoutHovered, setIsLogoutHovered] = useState(false);

    const handleHomeClick = () => {
        // Add your onclick logic for Home here
        console.log("Home clicked");
    };

    const handleAboutClick = () => {
        // Add your onclick logic for About here
        console.log("About clicked");
    };

    const handleContactClick = () => {
        // Add your onclick logic for Contact here
        console.log("Contact Us clicked");
    };

    const handleLoginClick = () => {
        // Add your onclick logic for Login here
        console.log("Login clicked");
    };

    const handleLogoutClick = () => {
        // Add your onclick logic for Login here
        console.log("Login clicked");
    };

    return (
        <div className="nav fixed top-0 z-10" style={{ width: "100%" }}>
            <div className="glass-effect flex justify-between items-center">
                <h1 className="font-BlueberryRegular text-4xl p-2 text-white">Pay&Park</h1>
                <div className="flex space-x-16 text-white p-2 font-weight-bold">
                    <h2
                        className={`text-md ${isHomeHovered ? 'text-gray-400 cursor-pointer' : 'cursor-pointer'}`}
                        onClick={handleHomeClick}
                        onMouseEnter={() => setIsHomeHovered(true)}
                        onMouseLeave={() => setIsHomeHovered(false)}
                    >
                        Home
                    </h2>
                    <h2
                        className={`text-md ${isAboutHovered ? 'text-gray-400 cursor-pointer' : 'cursor-pointer'}`}
                        onClick={handleAboutClick}
                        onMouseEnter={() => setIsAboutHovered(true)}
                        onMouseLeave={() => setIsAboutHovered(false)}
                    >
                        About
                    </h2>
                    <h2
                        className={`text-md ${isContactHovered ? 'text-gray-400 cursor-pointer' : 'cursor-pointer'}`}
                        onClick={handleContactClick}
                        onMouseEnter={() => setIsContactHovered(true)}
                        onMouseLeave={() => setIsContactHovered(false)}
                    >
                        Contact Us
                    </h2>
                    {login ?
                    <h2
                        className={`text-md ${isLoginHovered ? 'text-gray-400 cursor-pointer' : 'cursor-pointer'}`}
                        onClick={handleLogoutClick}
                        onMouseEnter={() => setIsLogoutHovered(true)}
                        onMouseLeave={() => setIsLogoutHovered(false)}
                    >
                        Logout
                    </h2>
                    :
                    <h2
                        className={`text-md ${isLoginHovered ? 'text-gray-400 cursor-pointer' : 'cursor-pointer'}`}
                        onClick={handleLoginClick}
                        onMouseEnter={() => setIsLoginHovered(true)}
                        onMouseLeave={() => setIsLoginHovered(false)}
                    >
                        Login
                    </h2> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;