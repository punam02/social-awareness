import React from 'react';
import { Link } from 'react-router-dom';


function Login() {


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password)

    // email.length > 0 && loginUser(email, password);
  };

  return (
    <div>
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="hidden md:block md:w-1/3 bg-cover" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp')" }}>
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Welcome back 👋</h2>
                  <h5 className="text-center text-gray-500 mb-6">Sign into your account</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700">Email address</label>
                      <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-gray-700">Password</label>
                      <input type="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                    </div>
                    <div className="mb-6">
                      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">Login</button>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-600 hover:underline">Register Now</Link>
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <a href="#" className="text-gray-500 text-xs">Terms of use</a> · <a href="#" className="text-gray-500 text-xs">Privacy policy</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 text-center py-4">
        <p className="text-sm text-gray-600">
          © 2024 - till date Copyright: 
          <a className="text-blue-600 hover:underline" href="/">Social Awareness</a>
        </p>
      </footer>
    </div>
  );
}

export default Login;
