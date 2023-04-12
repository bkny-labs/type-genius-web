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
    <div className="subscription-form">
     
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
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-white bg-opacity-10 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="text" placeholder="Email" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-purple-900 border-none hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
