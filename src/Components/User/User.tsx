import { useAppSelector } from "../../hooks"
import { LogIn } from "../LogIn"
import { Profile } from "../Profile"

const User = () => {
  const user = useAppSelector(state => state.squeezer.user)
  const isLogIn = user ? true : false

  return (
    <>
      {isLogIn ? <Profile user={user} /> : <LogIn />}
    </>
  )
}

export { User }
