import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Thanks() {
  return (
    <div className="md:w-96 w-10/12" id="contact">
        <div className="py-32">
          <div className="bg-gray-900 bg-opacity-90 relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
            <div className="py-6 px-8 rounded-lg bg-gray-900 bg-opacity-90">
              <Link to="/"><FaArrowLeft /></Link>
              <h1 className="text-white font-bold text-5xl mb-3 text-center">Thank you</h1>
              <p>You are now subscribed and will receive emails about Type Genius!</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Thanks;
