import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="bg-black text-white py-10 text-lg text-center bottom-0 left-0 w-full p-7">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-start mb-auto">
            <h1 className="font-BlueberryRegular text-4xl p-2 font-bold mb-4 text-green-700">
              Park & Pay
            </h1>
            <p className="text-left mb-4 ml-5 text-white">
              Pay & Park is a parking app that helps drivers find parking spots
              quickly and reduce traffic congestion. They use real-time data and
              are looking to improve the parking experience for both drivers and
              parking managers.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-BlueberryRegular text-4xl p-2 font-bold mb-4 text-green-700">
              Have an Idea?
            </h2>
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg> */}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-200 p-2 pl-10 rounded-md border-green-500 border"
                />
              </div>
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full bg-gray-200 p-2 rounded-md"
              ></textarea>
            </div>
            <button className="bg-green-500 hover:bg-green-700  font-bold py-2 px-4 rounded-full text-white">
              Submit
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mb-auto">
            <h1 className="font-BlueberryRegular text-4xl p-2 font-bold mb-4 text-green-700">
              Links
            </h1>
            <ul className="text-center">
              <li>Home</li>
              <li>About Us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Subscriptions</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
        <div className="flex items-center space-x-4">
          <a href="#">
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM86HOlGA787CxJygZRn310WlQKTUUZG754bulnjUKeA&s"
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img
              src="https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
        </div>
        <div>&copy; Annanya Ranjan</div>
      </div>
    </div>
  );
};

export default Footer;
