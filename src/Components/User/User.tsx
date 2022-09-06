import { useAppSelector } from "../../hooks/hooks"
import { LogIn } from "../LogIn/LogIn"
import { Profile } from "../Profile/Profile"

const User = () => {
  const user = useAppSelector(state => state.squeezer.user)
  const isLogIn = user ? true : false

  return (
    <>
      {!isLogIn && <LogIn />}
      {isLogIn && <Profile user={user} />}
    </>
  )
}

export { User }
