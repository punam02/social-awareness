import  React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(email, username, password, password2);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="container mx-auto px-4">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-lg">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="hidden md:block md:w-1/3 bg-cover" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp')" }}>
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    Welcome to <b>Social Awareness Campaings 👋</b>
                  </h2>
                  <h5 className="text-center text-gray-500 mb-6">
                    Sign Up
                  </h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Email Address"
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="username" className="block text-gray-700">Username</label>
                      <input
                        type="text"
                        name="username"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-gray-700">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password2" className="block text-gray-700">Confirm Password</label>
                      <input
                        type="password"
                        name="password2"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="Confirm Password"
                        onChange={e => setPassword2(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                      >
                        Register
                      </button>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">
                        Already have an account?{' '}
                        <Link to="campaigns/login" className="text-blue-600 hover:underline">
                          Login Now
                        </Link>
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <a href="#!" className="text-gray-500 text-xs">Terms of use</a> · <a href="#!" className="text-gray-500 text-xs">Privacy policy</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default Signup;
