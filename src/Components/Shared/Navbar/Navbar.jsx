import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

export default function Navbar() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'User logged out successfully!',
                });
            })
            .catch((error) => {
                console.error(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Logout Error',
                    text: error.message,
                });
            });
    };

    return (
        <>
            {/*<!-- Component: Basic Navbar --> */}
            <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <a
                            id="logo"
                            aria-label="logo"
                            aria-current="page"
                            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                            to="javascript:void(0)"
                        >
                            <img src="https://www.logolynx.com/images/logolynx/2e/2e6bc50bb603487c026fa4ebfcb92c08.png" className="h-10 w-10" alt="" />
                            CollegeSpotlight
                        </a>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                    : ""
                                }
              `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >
                            <li role="none" className="flex items-stretch">
                                <Link
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    to="/"
                                >
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    role="menuitem"
                                    aria-current="page"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-600 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    to="colleges"
                                >
                                    <span>Colleges</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    to="admissions"
                                >
                                    <span>Admissions</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    to="mycollege"
                                >
                                    <span>My College</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                {user ? (
                                    <div className="flex items-center justify-center gap-6">
                                        <img
                                            title={user.displayName}
                                            className="w-12 h-12 rounded-full"
                                            src={user.photoURL}
                                            alt=""
                                        />
                                        <Link
                                            onClick={handleLogOut}

                                            role="menuitem"
                                            aria-haspopup="false"
                                            tabIndex="0"
                                            className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                            to="login"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                ) : (
                                    <Link to="/login"
                                        role="menuitem"
                                        aria-haspopup="false"
                                        tabIndex="0"
                                        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    >
                                        Login
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/*<!-- End Basic Navbar--> */}
        </>
    )
}