import { NavLink } from "react-router-dom";
import { User } from "../User/User"
const Nav = () => {
  return (
    <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap navbar bg-light">
      <div className="container-fluid">
        <NavLink
          to={'/'}
          className="navbar-brand"
        >
          Links Squeezer
        </NavLink>
        <NavLink
          to={'statistics'}
          className="btn"
        >
          Statistics
        </NavLink>
        <User />
      </div>
    </nav>
  )
}

export { Nav }
