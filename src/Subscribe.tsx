import "./index.scss";
import * as React from "react";
import { useState } from "react";

export default function Subscribe() {
  const [formData, setFormData] = useState({});

  function handleChange(e: { target: { name: any; value: any; }; }) {
    console.log(formData);
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="w-full">
      <div className="row">
        <div className="column align-center">
          <a href="https://github.com/m4tuna" target="_blank" rel="noreferrer">
          <button className="flex items-center text-sm uppercase rounded mx-auto my-auto bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-500 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-6 h-6 mr-3"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              Github
        </button>
        </a>
        </div>
      </div>
     
      <form 
        className="px-5 pt-5 pb-5 mb-4" 
        method="post"
        name="contact"
        action="thanks"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-white bg-opacity-10 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-white bg-opacity-10 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-6 px-3 text-white bg-white bg-opacity-10 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" type="textarea" placeholder="Type your message" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-green-900 border-none hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
