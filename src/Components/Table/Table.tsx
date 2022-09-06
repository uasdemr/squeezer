import React, { useEffect, useState } from "react"
import { Links } from "../../const"
import { useAppDispatch } from "../../hooks/hooks"
import { offsetStart, setSorting } from "../../store/books-slice"
import store from "../../store/store"
import { TableType } from "../../types/app"
import { Th } from "../Th/Th"

const Table = ({ rows, sorting }: TableType) => {
  const [componentRows, setComponentsRows] = useState(rows)
  const { sort, parametr } = sorting

  const dispatch = useAppDispatch()

  const setSort = (evt: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
    const sort = evt.currentTarget.dataset.sort
    if (sort) {

      if (!sorting.sort) {
        store.dispatch(setSorting({
          sort: 'asc',
          parametr: sort
        }))
      }

      else if (sorting.sort === 'asc' && sorting.parametr === sort) {
        store.dispatch(setSorting({
          sort: 'desc',
          parametr: sort
        }))
      }
      else if (sorting.sort === 'desc' && sorting.parametr === sort) {
        store.dispatch(setSorting({
          sort: '',
          parametr: ''
        }))
      }
      else {
        store.dispatch(setSorting({
          sort: 'asc',
          parametr: sort
        }))
      }
    }
    dispatch(offsetStart())
  }

  useEffect(() => {
    setComponentsRows(rows)
  }, [rows])

  return (
    <section className="table-responsive tabler-wrapper">
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th scope="col">Id</th>
            {
              Links.map((item, index) => {
                return <Th
                  name={item}
                  setSort={setSort}
                  sort={sort}
                  parametr={parametr}
                  key={index}
                />
              })
            }
          </tr>
        </thead>
        <tbody style={{ maxHeight: '67vh' }}>
          {
            componentRows.map((componentRow) => {
              return (
                <tr
                  key={componentRow.id}
                >
                  <td>{componentRow.id}</td>
                  <td>
                    <a href={`http://79.143.31.216/s/${componentRow.short}`}>{componentRow.short}</a>
                  </td>
                  <td>{componentRow.target}</td>
                  <td>{componentRow.counter}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export { Table }
