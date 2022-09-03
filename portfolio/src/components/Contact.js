import React from "react";
import { Links } from "react-scroll";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-r from-blue-900 to-purple-500  text-gray-300 flex justify-center items-center p-4"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300">
          Contact
        </p>
        <p className="text-4xl pt-4">You have made it to the end!</p>

        <p className="text-gray-300 py-4">
          - Send me an email - bilalv656@gmail.com - Twitter - @bilalv656 -
          Github - @bilalgit98
        </p>

        <div>
          <a href="https://github.com/bilalgit98">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r from-blue-900 to-purple-500">
              View Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
