import { Outlet } from "react-router-dom"
import { useAppSelector } from "../../hooks/hooks"
import { RootState } from "../../store/store"
import { Header } from "../Header/Header"
import { Spinner } from "../Spinner"

const Layout = () => {
  const getIsLoading = () => (state: RootState) => state.squeezer.isDataLoading
  const isLoading = useAppSelector(getIsLoading())

  return (
    <section className="d-flex flex-column">
      <Header />
      {isLoading && <Spinner text="Loading" />}
      <Outlet />
    </section>
  )
}

export { Layout }
