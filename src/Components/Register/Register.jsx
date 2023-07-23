import { useContext } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";


const Register = () => {


  const { createUser, googleSignIn } = useContext(AuthContext)

  const handleRegister = event => {
    event.preventDefault()
    const form = event.target;
    const displayName = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(displayName, photoUrl, email, password);

    createUser(email, password, displayName, photoUrl)
    .then((result) => {
      const loggedUser = result.user;
      return updateProfile(loggedUser, {
        displayName: displayName,
        photoURL: photoUrl,
      })
        .then(() => {
          console.log(loggedUser);
          Swal.fire({
            icon: 'success',
            title: 'User registered successfully',
          });
          form.reset();
        });
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Registration Error',
        text: error.message,
      });
    });
}

const handlegoogleSignIn = () => {
  googleSignIn()
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
      Swal.fire({
        icon: 'success',
        title: 'User logged in successfully!',
      });
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: error.message,
      });
    });
}
  return (
    <>
      <div className="py-6">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")'
            }}
          />
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-xl text-gray-600 text-center">Register Here!</p>
            <a
              href="#"
              className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3">
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className='h-10 w-10' alt="" />
              </div>
              <button className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold" onClick={handlegoogleSignIn}>Sign in with Google</button>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4" />
              <a href="#" className="text-xs text-center text-gray-500 uppercase">
                or Register with email
              </a>
              <span className="border-b w-1/5 lg:w-1/4" />
            </div>
            <form onSubmit={handleRegister}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="name" name="name"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Photo Url
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text" name="photoUrl"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email" name="email"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password" name="password"
                />
              </div>
              <div className="mt-8">
                <input className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" type="submit" value="Register" />
              </div>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4" />
              <Link className="text-xs text-gray-500 uppercase" to="/login">Or Login</Link>
              <span className="border-b w-1/5 md:w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Register;