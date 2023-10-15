import { Component } from "react"; // You're not using 'useContext'
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

type HeaderState = {
  theme: string;
  darkSide: boolean;
  headerColor: string;
  scrollPosition: number;
  isDropdownOpen: boolean;
};

class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);

    const theme = localStorage.getItem("theme") || "light";
    this.state = {
      theme,
      darkSide: theme === "dark",
      headerColor: "transparent",
      scrollPosition: 0,
      isDropdownOpen: false 
    };
  }

  componentDidMount() {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", this.state.theme);
    // window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  }

  toggleDropdown = () => {
    this.setState(prevState => ({ isDropdownOpen: !prevState.isDropdownOpen }));
  }

  toggleDarkMode = (checked: boolean) => {
    const theme = checked ? "dark" : "light";
    this.setState({ darkSide: checked, theme });
    localStorage.setItem("theme", theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
  };
  render() {
    const { theme, darkSide, isDropdownOpen } = this.state;

    return (
      <div className={`sticky top-0 z-20 w-full  bg-base-100 `}>
        <div className="navbar  container mx-auto px-9 ">
          <div className="navbar-start ">
            <div className="dropdown pt-2 Hamburger" onClick={this.toggleDropdown}>
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                htmlFor="my-drawer-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    theme === "dark" ? "dark:text-white" : "text-current"
                  }`}
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

              <Link to="/Contact">
                <li>
                  <p className="btn-ghost mt-2 text-neutral "> Contact us </p>
                </li>
              </Link>

              <Link to="/information">
                <li>
                  <p className="btn-ghost mt-2 text-neutral"> Informations </p>
                </li>
              </Link>

              {/* <Link to="/dashboard">
                <li>
                  <p className="btn-ghost mt-2 text-neutral"> Dashboard </p>
                </li>
              </Link> */}
            </ul>
          </div>
          {isDropdownOpen && (
                    <div className="absolute inset-x-0 top-0 w-full z-40 mt-16 lg:hidden ml-9 ">
                        <div className=" shadow-lg rounded-lg overflow-hidden bg-base-100">
                            <div className="p-4">
                                <Link
                                to="/"
                                className="block px-4 py-2 "
                                onClick={() => this.setState({ isDropdownOpen: false })}
                                >
                                    Home
                                </Link>
                                <Link
                                to="/"
                                className="block px-4 py-2 "
                                onClick={() => this.setState({ isDropdownOpen: false })}
                                >
                                    Get informations
                                </Link>
                                <Link
                                to="/"
                                className="block px-4 py-2 "
                                onClick={() => this.setState({ isDropdownOpen: false })}
                                >
                                    Contact us
                                </Link>
                                {/* <Link
                                to="/"
                                className="block px-4 py-2 "
                                onClick={() => this.setState({ isDropdownOpen: false })}
                                >
                                    Dashboard
                                </Link> */}
                            </div>
                        </div>
                    </div>
                )}
          <div className="navbar-end mr-3 gap-x-3">


            <DarkModeSwitch
              className="ml-3 mr-1 mt-1 lg:mt-3"
              checked={darkSide}
              onChange={this.toggleDarkMode}
              size={20}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;