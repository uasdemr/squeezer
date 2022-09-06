import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { statistics } from "../../store/api-action"
import { RootState } from "../../store/store"
import { LittlePaginator } from "../LittlePaginator/LittlePaginator"
import { Table } from "../Table"

const Main = () => {

  const getSorting = () => (state: RootState) => state.squeezer.sorting
  const getOffset = () => (state: RootState) => state.squeezer.offset
  const getLimit = () => (state: RootState) => state.squeezer.limit
  const getHasNext = () => (state: RootState) => state.squeezer.hasNext
  const getData = () => (state: RootState) => state.squeezer.data

  const sorting = useAppSelector(getSorting())
  const offset = useAppSelector(getOffset())
  const limit = useAppSelector(getLimit())
  const hasNext = useAppSelector(getHasNext())
  const data = useAppSelector(getData())

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (offset >= 0) {
      dispatch(statistics({ sorting, offset, limit }))
    }
  }, [sorting, offset])

  return (
    <>
      <section>
        <Table
          rows={data}
          sorting={sorting}
        />
        <LittlePaginator hasNext={hasNext} />
      </section>
    </>
  )
}

export { Main }

