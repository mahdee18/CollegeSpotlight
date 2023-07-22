import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
              </a>

              <p className="max-w-sm mt-2 text-white dark:text-white-400">Join 31,000+ others and never miss out on new tips, tutorials, and more.</p>

              <div className="flex mt-6 -mx-2">

              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-white uppercase dark:text-white">About</h3>
                <a href="#" className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">Company</a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">Community</a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">Careers</a>
              </div>

              <div>
                <h3 className="text-white uppercase dark:text-white">Blog</h3>
                <a href="#" className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">Tech</a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">Music</a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">Videos</a>
              </div>

              <div>
                <h3 className="text-white uppercase dark:text-white">Products</h3>
                <a href="#" className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">Mega cloud</a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">Aperion UI</a>
                <a href="#" className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">Meraki UI</a>
              </div>

              <div>
                <h3 className="text-white uppercase dark:text-white">Contact</h3>
                <span className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">+1 526 654 8965</span>
                <span className="block mt-2 text-sm text-white dark:text-white-400 hover:underline">example@email.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-white dark:text-white-400">© Brand 2020 - All rights reserved by Mahdee Al Amin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
