import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { statistics } from "../../store/api-action"
import store, { RootState } from "../../store/store"
import { SqueezeType } from "../../types/app"

export type TableProps = {
  data: SqueezeType[]
}

// const Table = ({ data }: TableProps) => {
const Table = () => {
  // Запилить компонент таблицы
  // const getOrder = () => (state: RootState) => state.squeezer.order
  // const getOffset = () => (state: RootState) => state.squeezer.offset
  // const getLimit = () => (state: RootState) => state.squeezer.limit
  const getData = () => (state: RootState) => state.squeezer.data

  // const order = useAppSelector(getOrder())
  // const offset = useAppSelector(getOffset())
  // const limit = useAppSelector(getLimit())
  const data = useAppSelector(getData())

  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Squeezed</th>
            <th scope="col">Full</th>
            <th scope="col">conversion Count</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>
                    <a href={`http://79.143.31.216/s/${item.short}`}>{item.short}</a>
                  </td>
                  <td>{item.target}</td>
                  <td>{item.counter}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export { Table }
