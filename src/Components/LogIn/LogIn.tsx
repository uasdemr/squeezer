import store from "../../store/store"
import { logIn, register } from "../../store/api-action"
import { useState } from "react"
import cn from 'classnames'

const LogIn = () => {
  const [showDropDown, setShowDropDown] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onDropDownBtnClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setShowDropDown(!showDropDown)
  }

  const onNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.currentTarget.value)
  }
  const onPasswordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.currentTarget.value)
  }

  const onLogInButtonHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    store.dispatch(logIn({ username, password }))
  }

  const onRegistrationButtonHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    store.dispatch(register({ username, password }))
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
        LogIn
      </button>
      <ul
        className={cn("dropdown-menu", { show: showDropDown })}
        style={{ position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate(-238px, 40px)" }}
      >
        <li>
          <form className='user_form'>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
              <input
                onChange={onNameChange}
                value={username}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                onChange={onPasswordChange}
                value={password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="d-flex justify-content-between">
              <button
                onClick={onLogInButtonHandler}
                className="btn btn-primary"
              >
                LogIn
              </button>
              <button
                onClick={onRegistrationButtonHandler}
                type="submit"
                className="btn btn-primary"
              >
                Registration
              </button>
            </div>
          </form>
        </li>
      </ul>
    </div>
  )
}

export { LogIn }
