import { useState } from "react"
import cn from 'classnames'
import { logOut } from "../../store/books-slice"
import store from "../../store/store"

type ProfileProps = {
  user?: string
}

const Profile = ({ user }: ProfileProps) => {
  const [showDropDown, setShowDropDown] = useState(false)

  const onDropDownBtnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setShowDropDown(!showDropDown)
  }

  const onLogOutBtnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    store.dispatch(logOut())
  }

  return (
    <div className="dropdown">
      <button
        onClick={onDropDownBtnClick}
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Profile
      </button>
      <ul
        className={cn("dropdown-menu", { show: showDropDown })}
        style={{ position: "absolute", right: "0", top: "40px", margin: "0px" }}
      >
        <li className="user_form">
          <p>Username: <mark>{user}</mark></p>
          <button
            onClick={onLogOutBtnClick}
            type="button"
            className="btn btn-primary btn-sm"
          >
            LogOut
          </button>
        </li>
      </ul>
    </div>
  )
}

export { Profile }
