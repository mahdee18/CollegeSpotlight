import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Registration = () => {
  const { createUser } = useContext(AuthContext)
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(displayName,email,password,photoUrl)
    createUser(,email, password, photoUrl)
    .then((result) => {
        // User created successfully, update profile
        const loggedUser = result.user;
        return updateProfile(loggedUser, {
            displayName: displayName,
            photoURL: photoUrl,
        }).then(() => {
            console.log("Profile updated successfully");
            console.log(loggedUser);
            form.reset();
        });
    })
    .catch((error) => {
        console.error("Error creating user:", error.message);
    });
  }
      // Google Sign in with popup
    //   const handleWithGoogleSingUp = () => {
    //     googleSignIn()
    //     .then((result)=>{
    //         const loggedGoogleUser = result.user;
    //         console.log(loggedGoogleUser)
    //     })
    //     .catch((error) => {
    //         console.error(error.message);
    //       });
    // }

  return (
    <div className="py-6">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
          <p className="text-xl text-gray-600 text-center">Create an account</p>
          <form onSubmit={handleRegister}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="displayName"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="photoUrl"
                required
              />
            </div>
            <div className="mt-8">
              <input  type="submit" className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" value={'Register'} />
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/login" className="text-xs text-gray-500 uppercase">
              Already have an account? Login
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
