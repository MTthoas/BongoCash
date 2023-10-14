import { Link } from 'react-router-dom'

export default function header() {
  return (
    <div>
      <div className={`sticky top-0 z-20 w-full  bg-base-100 `}>
        <div className="navbar  container mx-auto px-8 ">
          <div className="navbar-start pt-2 ">
            <div className="dropdown pt-1 Hamburger">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                htmlFor="my-drawer-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <a className="text-3xl font-bold ml-3 mt-1 hover:cursor-pointer" href="/">
              <span className=" mt-2 bg-clip-text font-extrabold  text-transparent bg-gradient-to-r from-neutral via-neutral to-base-100 md:inline-block">
                {" "}
                Bongo{" "}
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-4 space-x-4 mt-1">
              <Link to="/">
                <li>
                  <p className="btn-ghost mt-2 text-neutral"> Home </p>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <p className="btn-ghost mt-2 text-neutral"> Payments status </p>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <p className="btn-ghost mt-2 text-neutral"> Contact us </p>
                </li>
              </Link>

              
            </ul>
          </div>
          <div className="navbar-end mr-3 gap-x-3">
            <Link to="/Dashboard">
                <button className="mt-3 bg-black rounded-lg py-2 px-4 text-white">
                    Se connecter
                </button>
            </Link>

            {/* <DarkModeSwitch
              className="ml-3 mr-1 mt-3"
              checked={darkSide}
              onChange={this.toggleDarkMode}
              size={20}
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
